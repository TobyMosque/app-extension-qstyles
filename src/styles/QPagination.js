import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  inputStyle = void 0
  inputClass = void 0
  inputDarkClass = void 0
  inputLightClass = void 0
  size = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ],
  cbComputed (computed) {
    computed.__inputClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.inputClass, 'inputClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.inputDarkClass, 'inputDarkClass')
        let lightClass = this.__getStyleProp(this.$attrs.inputLightClass, 'inputLightClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }