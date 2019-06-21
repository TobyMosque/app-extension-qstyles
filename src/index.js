const extendDatetimePicker = function (conf) {
  let components = [
    'QLayout',
    'QPageContainer',
    'QPageSticky',
    'QPageScroller',
    'QPage',
    'QHeader',
    'QFooter',
    'QDrawer',
    'QFab',
    'QFabAction',
    'QAjaxBar',
    'QAvatar',
    'QBadge',
    'QBanner',
    'QBar',
    'QBreadcrumbs',
    'QBtn',
    'QBtnGroup',
    'QBtnDropdown',
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
    'QInput',
    'QField',
    'QIcon',
    'QImg',
    'QInnerLoading',
    'QInput',
    'QKnob',
    'QLinearProgress',
    'QList',
    'QItem',
    'QMarkupTable',
    'QMenu',
    'QSelect',
    'QRadio',
    'QCheckbox',
    'QToggle',
    'QBtnToggle',
    'QOptionGroup',
    'QPagination',
    'QParallax',
    'QPopupEdit',
    'QPopupProxy',
    'QPullToRefresh',
    'QRange',
    'QRating',
    'QScrollArea',
    'QSlideItem',
    'QSlider',
    'QSeparator',
    'QSpinner',
    'QSplitter',
    'QStepper',
    'QStep',
    'QTable',
    'QTabs',
    'QTab',
    'QRouteTab',
    'QTabPanels',
    'QTabPanel',
    'QTimeline',
    'QTimelineEntry',
    'QToolbar',
    'QToolbarTitle',
    'QTooltip',
    'QTree',
    'QUploader',
    'QVideo',
    'QDate',
    'QTime'
  ]
  components.forEach(component => {
    if (conf.framework.components.indexOf(component)) {
      conf.boot.push('~quasar-app-extension-qstyles/src/boot/' + component + '.js')
    }
  })
  conf.build.transpileDependencies.push(/quasar-app-extension-qstyles[\\/]src/)
  conf.build.transpileDependencies.push('quasar-app-extension-qstyles/style.js')
}

module.exports = function (api) {
  var compatibleWith = api.compatibleWith || function (_, version) {
    return api.compatibleWithQuasarApp(version)
  }
  compatibleWith('@quasar/app', '^1.0.0-beta.23')
  api.extendQuasarConf(extendDatetimePicker)
}

