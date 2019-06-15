import StyleFactory from './StyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/base.js'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/btn-group.js'
import btnCommonState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/btn-common.js'

class Model extends BaseModel {
  contentStyle = void 0
  contentClass = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnCommonState, btnGroupState, baseState ] })
export default state
export { Model, mixin }
