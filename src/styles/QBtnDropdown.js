import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import btnCommonState from 'quasar-app-extension-qstyles/src/styles/QBtnShared'
import popupState from 'quasar-app-extension-qstyles/src/styles/QPopup'
import btnState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtn'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
  contentDarkClass = void 0
  contentLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, 
  baseMixin: baseMixin,
  baseStates: [ btnState, btnCommonState, btnGroupState, baseState ],
  cbComputed (computed) {
    computed.__contentClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.contentClass, 'contentClass') || popupState.contentClass
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.contentDarkClass, 'contentDarkClass') || popupState.contentDarkClass
        let lightClass = this.__getStyleProp(this.$attrs.contentLightClass, 'contentLightClass') || popupState.contentLightClass
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }
