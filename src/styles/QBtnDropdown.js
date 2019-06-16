import QStyleFactory from './QStyleFactory'
import themesState from 'quasar-app-extension-qstyles/src/styles/QTheme'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import btnCommonState from 'quasar-app-extension-qstyles/src/styles/QBtnShared'
import btnState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtn'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnState, btnCommonState, btnGroupState, baseState ], 
  cbComputed (computed) {
    computed.__contentClass = function () {
      let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
      let classes = dark ? themesState.dark : themesState.light
      let contentClass = this.__getStyleProp(this.$attrs.contentClass, 'contentClass')
      return contentClass || classes
    }
  } 
})
export default state
export { Model, mixin }
