import StyleFactory from './StyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/base.js'

class Model extends BaseModel {
  square = void 0
  flat = void 0
  bordered = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ], 
  cbComputed (computed) {
    computed.__class = function () {
      let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
      let classes = dark ? themesState.dark : themesState.light
      return this.$attrs.class || classes
    }
  }
})
export default state
export { Model, mixin }