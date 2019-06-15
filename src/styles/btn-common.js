import StyleFactory from './StyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/base.js'
import btnGroupState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/btn-group.js'

class Model extends BaseModel {
  ripple = void 0
  size = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnGroupState, baseState ] })
export default state
export { Model, mixin }
