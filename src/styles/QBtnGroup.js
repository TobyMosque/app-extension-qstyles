import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  outline = void 0
  flat = void 0
  unelevated = void 0
  rounded = void 0
  push = void 0
  glossy = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ] })
export default state
export { Model, mixin }
