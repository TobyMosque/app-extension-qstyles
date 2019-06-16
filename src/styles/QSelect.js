import QStyleFactory from './QStyleFactory'
import themesState from 'quasar-app-extension-qstyles/src/styles/QTheme'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import fieldState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QField'

class Model extends BaseModel {
  popupContentClass = void 0
  popupContentStyle = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ fieldState, baseState ], 
  cbComputed (computed) {
    computed.__popupContentClass = function () {
      let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
      let classes = dark ? themesState.dark : themesState.light
      return this.__getStyleProp(this.$attrs.popupContentClass, 'popupContentClass') || classes
    }
  }
})
export default state
export { Model, mixin }
