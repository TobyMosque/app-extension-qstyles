import metaService from './metas'

class ComponentService {
  buildProperties (Vue, name, meta) {
    return Vue.extend({
      name: meta.name + 'Properties',
      data () {
        return {
          showBanner1: true,
          showBanner2: true
        }
      },
      render (h) {
        let self = this
        let table = []
        let rows = []
        let props = Object.keys(meta.props)
        props.forEach(propName => {
          let prop = meta.props[propName]
          let editField = void 0
          let booleanInput = () => {
            return h('q-checkbox', {
              attrs: {
                toggleIndeterminate: true
              },
              props: {
                value: meta.state[propName]
              },
              on: {
                input (value) {
                  meta.state[propName] = value
                }
              }
            }, void 0)
          }

          let selectColorInput = () => {
            return h('q-select-color', {
              props: {
                value: meta.state[propName]
              },
              on: {
                input (value) {
                  meta.state[propName] = value
                }
              }
            }, void 0)
          }

          let textInput = () => {
            return h('q-input', {
              props: {
                value: meta.state[propName]
              },
              on: {
                input (value) {
                  meta.state[propName] = value
                }
              }
            }, void 0)
          }

          let numericInput = () => {
            return h('q-input', {
              props: {
                type: 'number',
                value: meta.state[propName]
              },
              on: {
                input (value) {
                  meta.state[propName] = value
                }
              }
            }, void 0)
          }

          let checkType = (test) => {
            switch (true) {
              case test('boolean'):
                editField = booleanInput()
                break
              case test('number'):
                editField = numericInput()
                break
              case test('function'):
              case test('string'):
              case test('any'):
                editField = textInput()
                break
              default:
                console.log('not found: ', prop.type)
                editField = textInput()
                break
            }
          }

          let typeName = ''
          if (prop.name.indexOf('color') !== -1) {
            typeName = prop.type.toLowerCase()
            editField = selectColorInput()
          } else if (typeof prop.type === 'string') {
            typeName = prop.type.toLowerCase()
            checkType(type => typeName === type)
          } else if (Array.isArray(prop.type)) {
            let types = prop.type.map(type => type.toLowerCase())
            typeName = types.join(', ')
            checkType(type => types.indexOf(type) !== -1)
          }

          let row = h('tr', {}, [
            h('td', {}, prop.name),
            h('td', {}, propName),
            h('td', {}, typeName),
            h('td', { style: 'min-width: 250px' }, [ editField ]),
            h('td', { style: 'white-space: inherit' }, prop.desc)
          ])
          rows.push(row)
        })

        let header = h('thead', {}, [
          h('tr', {}, [
            h('th', {}, 'Dash Case'),
            h('th', {}, 'Camel Case'),
            h('th', {}, 'Type(s)'),
            h('th', { style: 'min-width: 250px' }, 'Value'),
            h('th', { style: 'white-space: inherit' }, 'Description')
          ])
        ])

        let body = h('tbody', {}, rows)
        table.push(header)
        table.push(body)

        let banner1Msg = ''
        let banner2Msg = ''
        if (metaService.orfans.indexOf(meta.name) !== -1) {
          banner1Msg = `The properties of the style wrapper ${meta.name} will act as the default value others style wrappers, if them don't expecify your owner values.`
        } else {
          banner1Msg = `The properties of the style wrapper ${meta.name} will act as the default value of the style related properties of the Quasar Component with the same name.`
        }
        if (meta.parent) {
          banner2Msg = `${meta.name} inherits the properties of the style wrapper ${meta.parent.name}, so that will use the values of ${meta.parent.name} if them don't expecify your owner properties`
        }
        let children = []
        if (self.showBanner1 && banner2Msg) {
          children.push(h('q-banner', {
            class: 'q-mb-md bg-warning text-black',
            scopedSlots: {
              action (props) {
                return h('q-btn', {
                  attrs: {
                    flat: true,
                    color: 'black',
                    label: 'Dismiss'
                  },
                  on: {
                    click () {
                      self.showBanner1 = false
                    }
                  }
                })
              }
            }
          }, banner1Msg))
        }
        if (self.showBanner2 && banner2Msg) {
          children.push(h('q-banner', {
            class: 'q-mb-md bg-warning text-black',
            scopedSlots: {
              action (props) {
                return h('q-btn', {
                  attrs: {
                    flat: true,
                    color: 'black',
                    label: 'Dismiss'
                  },
                  on: {
                    click () {
                      self.showBanner2 = false
                    }
                  }
                })
              }
            }
          }, banner2Msg))
        }
        children.push(h('q-btn', {
          class: 'full-width q-mb-md',
          attrs: {
            label: 'Reset'
          },
          on: {
            click () {
              var keys = Object.keys(meta.state)
              keys.forEach(key => {
                meta.state[key] = void 0
              })
            }
          }
        }))
        children.push(h('q-card', {}, [
          h('q-markup-table', {
            attrs: {
              separator: 'cell'
            }
          }, table)
        ]))
        return h('div', {}, children)
      }
    })
  }
  buildSettings (Vue, name, meta) {
    let metas = [ ...meta.depedents ]
    metas.unshift(meta)
    let componentIndex = {}
    let tabs = {}
    metas.forEach((item, index) => {
      let components = []
      let current = item
      while (current) {
        let dashCase = current.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
        components.push({
          camel: current.name,
          dash: dashCase
        })
        current = current.parent
      }
      componentIndex[item.name] = components
      tabs[item.name] = index + '-' + components[0].dash
    })

    return Vue.extend({
      name: meta.name + 'Settings',
      data () {
        return {
          accordion: name,
          splitter: 10,
          tabs
        }
      },
      render (h) {
        let self = this
        let metas = [ ...meta.depedents ]
        metas.unshift(meta)

        let accordions = []
        metas.forEach((item, index) => {
          let tabs = []
          let panels = []
          let components = componentIndex[item.name]
          components.forEach(component => {
            let tab = h('q-tab', {
              attrs: {
                name: index + '-' + component.dash,
                label: component.camel
              }
            }, void 0)
            let panel = h('q-tab-panel', {
              attrs: {
                name: index + '-' + component.dash
              }
            }, [
              h(component.dash + '-properties', {}, void 0)
            ])
            tabs.push(tab)
            panels.push(panel)
          })

          let accordion = h('q-expansion-item', {
            class: 'text-h6',
            attrs: {
              group: self.accordion,
              defaultOpened: index === 0,
              label: 'Settings - ' + item.name
            }
          }, [
            h('q-separator', {}, void 0),
            h('q-splitter', {
              props: {
                value: self.splitter
              },
              scopedSlots: {
                before (props) {
                  return h('q-tabs', {
                    props: {
                      value: self.tabs[item.name]
                    },
                    attrs: {
                      vertical: true
                    },
                    on: {
                      input (value) {
                        self.tabs[item.name] = value
                      }
                    }
                  }, tabs)
                },
                after (props) {
                  return h('q-tab-panels', {
                    props: {
                      value: self.tabs[item.name]
                    },
                    attrs: {
                      animated: true,
                      transitionPrev: 'jump-up',
                      transitionNext: 'jump-up'
                    }
                  }, panels)
                }
              }
            })
          ])
          accordions.push(accordion)
          accordions.push(h('q-separator', {}, void 0))
        })

        return h('q-card', {
          class: 'q-mb-md'
        }, [
          h('q-list', {}, accordions)
        ])
      }
    })
  }
  buildPage (Vue, name, meta) {
    return Vue.extend({
      name: meta.name + 'Page',
      render (h) {
        return h('q-page', { class: 'flex q-pa-md' }, [
          h('div', {
            class: 'full-width'
          }, [
            h(name + '-settings', {}, void 0),
            h('q-card', {
              class: 'q-mb-md'
            }, [
              h('q-card-section', {}, [
                h('div', { class: 'text-h6' }, 'Preview')
              ]),
              h('q-separator', {}, void 0),
              h('q-card-section', {}, [
                h(name + '-demo', {}, void 0)
              ])
            ])
          ])
        ])
      }
    })
  }
}

export default new ComponentService()
