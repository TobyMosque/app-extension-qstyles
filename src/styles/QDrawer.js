import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import layoutState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QLayout'

class Model extends BaseModel {
  width = void 0
  miniWidth = void 0
  contentStyle = void 0
  contentClass = void 0
  contentDarkClass = void 0
  contentLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ layoutState, baseState ],
  cbComputed (computed) {
    computed.__contentClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.contentClass, 'contentClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let lightClass = this.__getStyleProp(this.$attrs.contentLightClass, 'contentLightClass')
        let darkClass = this.__getStyleProp(this.$attrs.contentDarkClass, 'contentDarkClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }
