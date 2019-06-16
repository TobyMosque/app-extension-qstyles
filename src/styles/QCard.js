import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  square = void 0
  flat = void 0
  bordered = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ] })
export default state
export { Model, mixin }