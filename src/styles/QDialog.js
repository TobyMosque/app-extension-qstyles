import QStyleFactory from './QStyleFactory'
import themesState from 'quasar-app-extension-qstyles/src/styles/QTheme'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
  square = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ], 
  cbComputed (computed) {
    computed.__contentClass = function () {
      let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
      let classes = dark ? themesState.dark : themesState.light
      return this.__getStyleProp(this.$attrs.contentClass, 'contentClass') || classes
    }
  }, valueProp: Boolean
})
export default state
export { Model, mixin }