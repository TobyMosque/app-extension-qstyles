import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import fieldState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QField'

class Model extends BaseModel {
  inputClass = void 0
  inputStyle = void 0
  inputDarkStyle = void 0
  inputLightStyle = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ fieldState, baseState ],
  cbComputed (computed) {
    computed.__inputClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.inputClass, 'inputClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.inputDarkStyle, 'inputDarkStyle')
        let lightClass = this.__getStyleProp(this.$attrs.inputLightStyle, 'inputLightStyle')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }