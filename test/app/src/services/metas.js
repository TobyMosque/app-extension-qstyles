class MetaService {
  metas = {
    'QAjaxBar': { name: 'QAjaxBar', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QAvatar': { name: 'QAvatar', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBadge': { name: 'QBadge', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBanner': { name: 'QBanner', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBar': { name: 'QBar', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBreadcrumbs': { name: 'QBreadcrumbs', parent: 'QStyle', children: [], others: [], depedents: ['QBreadcrumbsEl'] },
    'QBreadcrumbsEl': { name: 'QBreadcrumbsEl', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBtn': { name: 'QBtn', parent: 'QBtnShared', children: [], others: [], depedents: [] },
    'QBtnDropdown': { name: 'QBtnDropdown', parent: 'QBtn', children: [], others: [ 'QPopup' ], depedents: [] },
    'QBtnGroup': { name: 'QBtnGroup', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QBtnShared': { name: 'QBtnShared', parent: 'QBtnGroup', children: [], others: [], depedents: [] },
    'QBtnToggle': { name: 'QBtnToggle', parent: 'QBtnShared', children: [], others: [], depedents: [] },
    'QCard': { name: 'QCard', parent: 'QStyle', children: [], others: [], depedents: ['QCardActions', 'QCardSection'] },
    'QCardActions': { name: 'QCardActions', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QCardSection': { name: 'QCardSection', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QCarousel': { name: 'QCarousel', parent: 'QStyle', children: [], others: [], depedents: ['QCarouselControl', 'QCarouselSlide'] },
    'QCarouselControl': { name: 'QCarouselControl', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QCarouselSlide': { name: 'QCarouselSlide', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QChatMessage': { name: 'QChatMessage', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QCheckbox': { name: 'QCheckbox', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QChip': { name: 'QChip', parent: 'QBtnShared', children: [], others: [], depedents: [] },
    'QCircularProgress': { name: 'QCircularProgress', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QColor': { name: 'QColor', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QDate': { name: 'QDate', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QDialog': { name: 'QDialog', parent: 'QPopup', children: [], others: [], depedents: [] },
    'QDrawer': { name: 'QDrawer', parent: 'QLayout', children: [], others: [], depedents: [] },
    'QEditor': { name: 'QEditor', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QExpansionItem': { name: 'QExpansionItem', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QFab': { name: 'QFab', parent: 'QBtnGroup', children: [], others: [], depedents: ['QFabAction'] },
    'QFabAction': { name: 'QFabAction', parent: 'QBtnGroup', children: [], others: [], depedents: [] },
    'QField': { name: 'QField', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QForm': { name: 'QForm', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QFooter': { name: 'QFooter', parent: 'QLayout', children: [], others: [], depedents: [] },
    'QHeader': { name: 'QHeader', parent: 'QLayout', children: [], others: [], depedents: [] },
    'QIcon': { name: 'QIcon', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QImg': { name: 'QImg', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QInfiniteScroll': { name: 'QInfiniteScroll', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QInnerLoading': { name: 'QInnerLoading', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QInput': { name: 'QInput', parent: 'QField', children: [], others: [], depedents: [] },
    'QItem': { name: 'QItem', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QItemSection': { name: 'QItemSection', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QItemLabel': { name: 'QItemLabel', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QKnob': { name: 'QKnob', parent: 'QCircularProgress', children: [], others: [], depedents: [] },
    'QLayout': {
      name: 'QLayout',
      parent: 'QStyle',
      children: [],
      others: [],
      depedents: [
        'QPageContainer',
        'QPage',
        'QHeader',
        'QFooter',
        'QDrawer',
        'QPageSticky',
        'QPageScroller'
      ]
    },
    'QLinearProgress': { name: 'QLinearProgress', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QList': { name: 'QList', parent: 'QStyle', children: [], others: [], depedents: ['QItem', 'QItemSection', 'QItemLabel'] },
    'QMarkupTable': { name: 'QMarkupTable', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QMenu': { name: 'QMenu', parent: 'QPopup', children: [], others: [], depedents: [] },
    'QOptionGroup': { name: 'QOptionGroup', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPage': { name: 'QPage', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPageContainer': { name: 'QPageContainer', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPageScroller': { name: 'QPageScroller', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPageSticky': { name: 'QPageSticky', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPagination': { name: 'QPagination', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPanel': { name: 'QPanel', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPanels': { name: 'QPanels', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QParallax': { name: 'QParallax', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPopup': { name: 'QPopup', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QPopupEdit': { name: 'QPopupEdit', parent: 'QPopup', children: [], others: [], depedents: [] },
    'QPopupProxy': { name: 'QPopupProxy', parent: 'QPopup', children: [], others: ['QMenu', 'QDialog'], depedents: [] },
    'QPullToRefresh': { name: 'QPullToRefresh', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QRadio': { name: 'QRadio', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QRange': { name: 'QRange', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QRating': { name: 'QRating', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QRouteTab': { name: 'QRouteTab', parent: 'QTab', children: [], others: [], depedents: [] },
    'QScrollArea': { name: 'QScrollArea', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QSelect': { name: 'QSelect', parent: 'QField', children: [], others: [ 'QPopup' ], depedents: [] },
    'QSeparator': { name: 'QSeparator', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QSlideItem': { name: 'QSlideItem', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QSlider': { name: 'QSlider', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QSpinner': { name: 'QSpinner', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QSplitter': { name: 'QSplitter', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QStep': { name: 'QStep', parent: 'QPanel', children: [], others: [], depedents: [] },
    'QStepper': { name: 'QStepper', parent: 'QPanels', children: [], others: [], depedents: ['QStep', 'QStepperNavigation'] },
    'QStepperNavigation': { name: 'QStepperNavigation', parent: 'QPanel', children: [], others: [], depedents: [] },
    'QStyle': { name: 'QStyle', parent: void 0, children: [], others: [], depedents: [] },
    'QTab': { name: 'QTab', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTable': { name: 'QTable', parent: 'QStyle', children: [], others: [], depedents: ['QTh', 'QTr', 'QTd'] },
    'QTh': { name: 'QTh', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTr': { name: 'QTr', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTd': { name: 'QTd', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTabPanel': { name: 'QTabPanel', parent: 'QPanel', children: [], others: [], depedents: [] },
    'QTabPanels': { name: 'QTabPanels', parent: 'QPanels', children: [], others: [], depedents: ['QTabPanel'] },
    'QTabs': { name: 'QTabs', parent: 'QStyle', children: [], others: [], depedents: ['QTab', 'QRouteTab'] },
    'QTime': { name: 'QTime', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTimeline': { name: 'QTimeline', parent: 'QPanel', children: [], others: [], depedents: ['QTimelineEntry'] },
    'QTimelineEntry': { name: 'QTimelineEntry', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QToggle': { name: 'QToggle', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QToolbar': { name: 'QToolbar', parent: 'QStyle', children: [], others: [], depedents: ['QToolbarTitle'] },
    'QToolbarTitle': { name: 'QToolbarTitle', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QTooltip': { name: 'QTooltip', parent: 'QPopup', children: [], others: [], depedents: [] },
    'QTree': { name: 'QTree', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QUploader': { name: 'QUploader', parent: 'QStyle', children: [], others: [], depedents: [] },
    'QVideo': { name: 'QVideo', parent: 'QStyle', children: [], others: [], depedents: [] }
  }
  layouts = [
    'QLayout',
    'QFab'
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
    'QChip',
    'QCircularProgress',
    'QColor',
    'QDate',
    'QDialog',
    'QEditor',
    'QExpansionItem',
    'QField',
    'QForm',
    'QIcon',
    'QImg',
    'QInfiniteScroll',
    'QInnerLoading',
    'QInput',
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
    'QScrollArea',
    'QSelect',
    'QSeparator',
    'QSlideItem',
    'QSlider',
    'QSpinner',
    'QSplitter',
    'QStepper',
    'QTable',
    'QTabPanels',
    'QTabs',
    'QTime',
    'QTimeline',
    'QToggle',
    'QToolbar',
    'QTooltip',
    'QTree',
    'QUploader',
    'QVideo'
  ]
  depedents = []
  orfans = []
  constructor () {
    this.metaKeys = Object.keys(this.metas)
    this.metaKeys.forEach(metaKey => {
      let meta = this.metas[metaKey]
      meta.depedents.forEach(depedent => {
        if (this.depedents.indexOf(depedent) === -1) {
          this.depedents.push(depedent)
        }
      })
    })
  }
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
              props[name] = { name: _name, desc: 'use that class, if standout property is equals to true', type: 'string' }
              return props
            case name.endsWith('arkClass'):
              props[name] = { name: _name, desc: `use that class, if dark property is equals to true${name === 'darkClass' ? '' : ` and ${name.replace(/dark/gi, '')} is not defined`}`, type: 'string' }
              return props
            case name.endsWith('ightClass'):
              props[name] = { name: _name, desc: `use that class, if dark property is equals to false${name === 'lightClass' ? '' : ` and ${name.replace(/light/gi, '')} is not defined`}`, type: 'string' }
              return props
            default:
              let prop = descriptions[_name]
              props[name] = prop ? { name: _name, desc: prop.desc, type: prop.type } : void 0
              return props
          }
        }, {})
        meta[name] = {
          props: props,
          state: state.default
        }
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
      child.depedents = child.depedents.map(depedent => {
        return this.metas[depedent]
      })
    })
  }
  async initialize () {
    this.linRelatives()
    await this.loadMeta(this.layouts).then(props => {
      this.layouts.forEach(name => {
        this.metas[name].props = props[name].props
        this.metas[name].state = props[name].state
      })
    })

    await this.loadMeta(this.components).then(props => {
      this.components.forEach(name => {
        this.metas[name].props = props[name].props
        this.metas[name].state = props[name].state
      })
    })

    await this.loadMeta(this.depedents).then(props => {
      this.depedents.forEach(name => {
        this.metas[name].props = props[name].props
        this.metas[name].state = props[name].state
      })
    })

    this.orfans = this.metaKeys.filter(key => {
      return !this.metas[key].props
    })

    await this.loadMeta(this.orfans, true).then(props => {
      this.orfans.forEach(name => {
        this.metas[name].props = props[name].props
        this.metas[name].state = props[name].state
      })
    })

    this.metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        this.copyPropsFromRelative(meta, emptyProps, child.children, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })

    this.metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        let parents = child.parent ? [ child.parent ] : []
        this.copyPropsFromRelative(meta, emptyProps, parents, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })

    this.metaKeys.forEach(metaKey => {
      let recursion = (meta, emptyProps, child) => {
        this.copyPropsFromRelative(meta, emptyProps, child.others, recursion)
      }
      this.checkEmptyProps(metaKey, recursion)
    })
  }
}

export default new MetaService()
