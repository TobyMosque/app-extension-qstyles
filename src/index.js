const extendDatetimePicker = function (conf) {
  let components = [
    'QBadge',
    'QBtn',
    'QBtnGroup',
    'QBtnDropdown',
    'QInput',
    'QField',
    'QInput',
    'QField',
    'QSelect',
    'QRadio',
    'QCheckbox',
    'QToggle',
    'QBtnToggle',
    'QOptionGroup',
    'QRange',
    'QSlider',
    'QDate',
    'QTime'
  ]
  components.forEach(component => {
    if (conf.framework.components.indexOf(component)) {
      conf.boot.push('~quasar-app-extension-qstyles/src/boot/' + component + '.js')
    }
  })
  conf.build.transpileDependencies.push(/quasar-app-extension-qstyles[\\/]src/)
}

module.exports = function (api) {
  var compatibleWith = api.compatibleWith || function (_, version) {
    return api.compatibleWithQuasarApp(version)
  }
  compatibleWith('@quasar/app', '^1.0.0-beta.23')
  api.extendQuasarConf(extendDatetimePicker)
}
