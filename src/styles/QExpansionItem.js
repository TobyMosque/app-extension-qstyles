import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  expandIconClass = void 0
  denseToggle = void 0
  headerStyle = void 0
  headerClass = void 0
  headerDarkClass = void 0
  headerLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ],
  props: {
    value: {
      desc: "Model of the component defining 'open' state; Either use this property (along with a listener for 'input' event) OR use v-model directive",
      category: "model"
    }
  },
  cbComputed (computed) {
    computed.__headerClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.headerClass, 'headerClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let lightClass = this.__getStyleProp(this.$attrs.headerLightClass, 'headerLightClass')
        let darkClass = this.__getStyleProp(this.$attrs.headerDarkClass, 'headerDarkClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }