import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  height = void 0
  controlColor = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ] })
export default state
export { Model, mixin }
