const extendDatetimePicker = function (conf) {
  if (conf.framework.components.indexOf('QInput')) {
    conf.boot.push('~quasar-app-extension-qstyles/src/boot/qstyle-input.js')
  }
  if (conf.framework.components.indexOf('QField')) {
    conf.boot.push('~quasar-app-extension-qstyles/src/boot/qstyle-field.js')
  }
  conf.build.transpileDependencies.push(/quasar-app-extension-qstyles[\\/]src/)
}

module.exports = function (api) {
  var compatibleWith = api.compatibleWith || function (_, version) {
    return api.compatibleWithQuasarApp(version)
  }
  compatibleWith('@quasar/app', '^1.0.0-beta.23')
  api.extendQuasarConf(extendDatetimePicker)
}
