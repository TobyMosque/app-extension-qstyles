import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import btnCommonState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtnShared'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
  contentLightClass = void 0
  contentDarkClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnCommonState, btnGroupState, baseState ],
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
