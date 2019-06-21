import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import popupState from 'quasar-app-extension-qstyles/src/styles/QPopup'
import fieldState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QField'

class Model extends BaseModel {
  popupContentClass = void 0
  popupContentStyle = void 0
  popupContentDarkClass = void 0
  popupContentLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ fieldState, baseState ], 
  cbComputed (computed) {
    computed.__popupContentClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.popupContentClass, 'popupContentClass') || popupState.contentClass
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.popupContentDarkClass, 'popupContentDarkClass') || popupState.contentDarkClass
        let lightClass = this.__getStyleProp(this.$attrs.popupContentLightClass, 'popupContentLightClass') || popupState.contentLightClass
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }
