class MetaService {
  metas = {
    'QAjaxBar': { name: 'QAjaxBar', parent: 'QStyle', children: [], others: [] },
    'QAvatar': { name: 'QAvatar', parent: 'QStyle', children: [], others: [] },
    'QBadge': { name: 'QBadge', parent: 'QStyle', children: [], others: [] },
    'QBanner': { name: 'QBanner', parent: 'QStyle', children: [], others: [] },
    'QBar': { name: 'QBar', parent: 'QStyle', children: [], others: [] },
    'QBreadcrumbs': { name: 'QBreadcrumbs', parent: 'QStyle', children: [], others: [] },
    'QBtn': { name: 'QBtn', parent: 'QBtnShared', children: [], others: [] },
    'QBtnDropdown': { name: 'QBtnDropdown', parent: 'QBtn', children: [], others: [ 'QPopup' ] },
    'QBtnGroup': { name: 'QBtnGroup', parent: 'QStyle', children: [], others: [] },
    'QBtnShared': { name: 'QBtnShared', parent: 'QBtnGroup', children: [], others: [] },
    'QBtnToggle': { name: 'QBtnToggle', parent: 'QBtnShared', children: [], others: [] },
    'QCard': { name: 'QCard', parent: 'QStyle', children: [], others: [] },
    'QCarousel': { name: 'QCarousel', parent: 'QStyle', children: [], others: [] },
    'QChatMessage': { name: 'QChatMessage', parent: 'QStyle', children: [], others: [] },
    'QCheckbox': { name: 'QCheckbox', parent: 'QStyle', children: [], others: [] },
    'QChip': { name: 'QChip', parent: 'QBtnShared', children: [], others: [] },
    'QCircularProgress': { name: 'QCircularProgress', parent: 'QStyle', children: [], others: [] },
    'QColor': { name: 'QColor', parent: 'QStyle', children: [], others: [] },
    'QDate': { name: 'QDate', parent: 'QStyle', children: [], others: [] },
    'QDialog': { name: 'QDialog', parent: 'QPopup', children: [], others: [] },
    'QDrawer': { name: 'QDrawer', parent: 'QLayout', children: [], others: [] },
    'QEditor': { name: 'QEditor', parent: 'QStyle', children: [], others: [] },
    'QExpansionItem': { name: 'QExpansionItem', parent: 'QStyle', children: [], others: [] },
    'QFab': { name: 'QFab', parent: 'QBtnGroup', children: [], others: [] },
    'QFabAction': { name: 'QFabAction', parent: 'QBtnGroup', children: [], others: [] },
    'QField': { name: 'QField', parent: 'QStyle', children: [], others: [] },
    'QFooter': { name: 'QFooter', parent: 'QLayout', children: [], others: [] },
    'QHeader': { name: 'QHeader', parent: 'QLayout', children: [], others: [] },
    'QIcon': { name: 'QIcon', parent: 'QStyle', children: [], others: [] },
    'QImg': { name: 'QImg', parent: 'QStyle', children: [], others: [] },
    'QInnerLoading': { name: 'QInnerLoading', parent: 'QStyle', children: [], others: [] },
    'QInput': { name: 'QInput', parent: 'QField', children: [], others: [] },
    'QItem': { name: 'QItem', parent: 'QStyle', children: [], others: [] },
    'QKnob': { name: 'QKnob', parent: 'QCircularProgress', children: [], others: [] },
    'QLayout': { name: 'QLayout', parent: 'QStyle', children: [], others: [] },
    'QLinearProgress': { name: 'QLinearProgress', parent: 'QStyle', children: [], others: [] },
    'QList': { name: 'QList', parent: 'QStyle', children: [], others: [] },
    'QMarkupTable': { name: 'QMarkupTable', parent: 'QStyle', children: [], others: [] },
    'QMenu': { name: 'QMenu', parent: 'QPopup', children: [], others: [] },
    'QOptionGroup': { name: 'QOptionGroup', parent: 'QStyle', children: [], others: [] },
    'QPage': { name: 'QPage', parent: 'QStyle', children: [], others: [] },
    'QPageContainer': { name: 'QPageContainer', parent: 'QStyle', children: [], others: [] },
    'QPageScroller': { name: 'QPageScroller', parent: 'QStyle', children: [], others: [] },
    'QPageSticky': { name: 'QPageSticky', parent: 'QStyle', children: [], others: [] },
    'QPagination': { name: 'QPagination', parent: 'QStyle', children: [], others: [] },
    'QPanel': { name: 'QPanel', parent: 'QStyle', children: [], others: [] },
    'QPanels': { name: 'QPanels', parent: 'QStyle', children: [], others: [] },
    'QParallax': { name: 'QParallax', parent: 'QStyle', children: [], others: [] },
    'QPopup': { name: 'QPopup', parent: 'QStyle', children: [], others: [] },
    'QPopupEdit': { name: 'QPopupEdit', parent: 'QPopup', children: [], others: [] },
    'QPopupProxy': { name: 'QPopupProxy', parent: 'QPopup', children: [], others: ['QMenu', 'QDialog'] },
    'QPullToRefresh': { name: 'QPullToRefresh', parent: 'QStyle', children: [], others: [] },
    'QRadio': { name: 'QRadio', parent: 'QStyle', children: [], others: [] },
    'QRange': { name: 'QRange', parent: 'QStyle', children: [], others: [] },
    'QRating': { name: 'QRating', parent: 'QStyle', children: [], others: [] },
    'QRouteTab': { name: 'QRouteTab', parent: 'QTab', children: [], others: [] },
    'QScrollArea': { name: 'QScrollArea', parent: 'QStyle', children: [], others: [] },
    'QSelect': { name: 'QSelect', parent: 'QField', children: [], others: [ 'QPopup' ] },
    'QSeparator': { name: 'QSeparator', parent: 'QStyle', children: [], others: [] },
    'QSlideItem': { name: 'QSlideItem', parent: 'QStyle', children: [], others: [] },
    'QSlider': { name: 'QSlider', parent: 'QStyle', children: [], others: [] },
    'QSpinner': { name: 'QSpinner', parent: 'QStyle', children: [], others: [] },
    'QSplitter': { name: 'QSplitter', parent: 'QStyle', children: [], others: [] },
    'QStep': { name: 'QStep', parent: 'QPanel', children: [], others: [] },
    'QStepper': { name: 'QStepper', parent: 'QPanels', children: [], others: [] },
    'QStyle': { name: 'QStyle', parent: void 0, children: [], others: [] },
    'QTab': { name: 'QTab', parent: 'QStyle', children: [], others: [] },
    'QTable': { name: 'QTable', parent: 'QStyle', children: [], others: [] },
    'QTabPanel': { name: 'QTabPanel', parent: 'QPanel', children: [], others: [] },
    'QTabPanels': { name: 'QTabPanels', parent: 'QPanels', children: [], others: [] },
    'QTabs': { name: 'QTabs', parent: 'QStyle', children: [], others: [] },
    'QTime': { name: 'QTime', parent: 'QStyle', children: [], others: [] },
    'QTimeline': { name: 'QTimeline', parent: 'QPanel', children: [], others: [] },
    'QTimelineEntry': { name: 'QTimelineEntry', parent: 'QStyle', children: [], others: [] },
    'QToggle': { name: 'QToggle', parent: 'QStyle', children: [], others: [] },
    'QToolbar': { name: 'QToolbar', parent: 'QStyle', children: [], others: [] },
    'QToolbarTitle': { name: 'QToolbarTitle', parent: 'QStyle', children: [], others: [] },
    'QTooltip': { name: 'QTooltip', parent: 'QPopup', children: [], others: [] },
    'QTree': { name: 'QTree', parent: 'QStyle', children: [], others: [] },
    'QUploader': { name: 'QUploader', parent: 'QStyle', children: [], others: [] },
    'QVideo': { name: 'QVideo', parent: 'QStyle', children: [], others: [] }
  }
  layouts = [
    'QLayout',
    'QPageContainer',
    'QPageSticky',
    'QPageScroller',
    'QPage',
    'QHeader',
    'QFooter',
    'QDrawer',
    'QFab',
    'QFabAction'
  ]
  components = [
    'QAjaxBar',
    'QAvatar',
    'QBadge',
    'QBanner',
    'QBar',
    'QBreadcrumbs',
    'QBtn',
    'QBtnDropdown',
    'QBtnGroup',
    'QBtnToggle',
    'QCard',
    'QCarousel',
    'QChatMessage',
    'QCheckbox',
    'QCheckbox',
    'QChip',
    'QCircularProgress',
    'QColor',
    'QDate',
    'QDate',
    'QDialog',
    'QEditor',
    'QExpansionItem',
    'QField',
    'QIcon',
    'QImg',
    'QInnerLoading',
    'QInput',
    'QInput',
    'QItem',
    'QKnob',
    'QLinearProgress',
    'QList',
    'QMarkupTable',
    'QMenu',
    'QOptionGroup',
    'QPagination',
    'QParallax',
    'QPopupEdit',
    'QPopupProxy',
    'QPullToRefresh',
    'QRadio',
    'QRange',
    'QRating',
    'QRouteTab',
    'QScrollArea',
    'QSelect',
    'QSeparator',
    'QSlideItem',
    'QSlider',
    'QSpinner',
    'QSplitter',
    'QStep',
    'QStepper',
    'QTab',
    'QTabPanel',
    'QTabPanels',
    'QTable',
    'QTabs',
    'QTime',
    'QTimeline',
    'QTimelineEntry',
    'QToggle',
    'QToolbar',
    'QToolbarTitle',
    'QTooltip',
    'QTree',
    'QUploader',
    'QVideo'
  ]
  loadMeta (list, orfan) {
    let meta = {}
    let promises = list.map(name => {
      let promises = []
      if (orfan) {
        promises.push(Promise.resolve({ default: {} }))
      } else {
        promises.push(import(`quasar/dist/api/${name}.json`))
      }
      promises.push(import(`quasar-app-extension-qstyles/src/styles/${name}`))
      return Promise.all(promises).then(([ info, state ]) => {
        let styles = Object.keys(state.default)
        let descriptions = info.default.props || {}
        let props = styles.reduce((props, name) => {
          let _name = name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
          switch (true) {
            case name === 'standoutClass':
              props[name] = { name: _name, desc: 'prop.desc', type: 'string' }
              return props
            case name.endsWith('arkClass'):
              props[name] = { name: _name, desc: `use that class, if dark property is equal to true${name === 'darkClass' ? '' : ` and ${name.replace(/dark/gi, '')} is not defined`}`, type: 'string' }
              return props
            case name.endsWith('ightClass'):
              props[name] = { name: _name, desc: `use that class, if dark property is equal to false${name === 'lightClass' ? '' : ` and ${name.replace(/light/gi, '')} is not defined`}`, type: 'string' }
              return props
            default:
              let prop = descriptions[_name]
              props[name] = prop ? { name: name, desc: prop.desc, type: prop.type } : void 0
              return props
          }
        }, {})
        meta[name] = props
      })
    })
    return Promise.all(promises).then(() => {
      return meta
    })
  }
  copyPropsFromRelative (meta, emptyProps, relatives, recursion) {
    if (emptyProps.length === 0 || relatives.length === 0) {
      return
    }
    for (var i = 0; i < relatives.length && emptyProps.length > 0; i++) {
      let relative = relatives[i]
      let relativePropKeys = Object.keys(relative.props)
      relativePropKeys.filter(propKey => {
        return emptyProps.indexOf(propKey) !== -1 && relative.props[propKey]
      }).forEach(propKey => {
        meta.props[propKey] = relative.props[propKey]
        let emptyIndex = emptyProps.indexOf(propKey)
        emptyProps.splice(emptyIndex, 1)
      })
      recursion(meta, emptyProps, relative)
    }
  }
  checkEmptyProps (metaKey, recursion) {
    let meta = this.metas[metaKey]
    let propKeys = Object.keys(meta.props)
    let emptyProps = propKeys.filter(propKey => {
      return !propKey.endsWith('arkClass') && !propKey.endsWith('ightClass') && !meta.props[propKey]
    })
    recursion(meta, emptyProps, meta)
  }
  linRelatives () {
    Object.keys(this.metas).forEach(name => {
      let child = this.metas[name]
      if (child.parent) {
        let parent = this.metas[child.parent]
        child.parent = parent
        parent.children.push(child)
      }
      child.others = child.others.map(other => {
        return this.metas[other]
      })
    })
  }
  async initialize () {
    this.linRelatives()
    await this.loadMeta(this.layouts).then(props => {
      this.layouts.forEach(name => {
        this.metas[name].props = props[name]
      })
    })

    await this.loadMeta(this.components).then(props => {
      this.components.forEach(name => {
        this.metas[name].props = props[name]
      })
    })

    let metaKeys = Object.keys(this.metas)
    var orfans = metaKeys.filter(key => {
      return !this.metas[key].props
    })

    await this.loadMeta(orfans, true).then(props => {
      orfans.forEach(name => {
        this.metas[name].props = props[name]
      })
    })

    metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        this.copyPropsFromRelative(meta, emptyProps, child.children, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })

    metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        let parents = child.parent ? [ child.parent ] : []
        this.copyPropsFromRelative(meta, emptyProps, parents, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })

    metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        this.copyPropsFromRelative(meta, emptyProps, child.others, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })
  }
}

export default new MetaService()
