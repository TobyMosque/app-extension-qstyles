import StyleFactory from './StyleFactory'
import themesState from 'quasar-app-extension-qstyles/src/styles/themes.js'
import baseState from 'quasar-app-extension-qstyles/src/styles/base.js'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/btn-group.js'
import btnCommonState from 'quasar-app-extension-qstyles/src/styles/btn-common.js'
import btnState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/btn.js'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnState, btnCommonState, btnGroupState, baseState ], 
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
