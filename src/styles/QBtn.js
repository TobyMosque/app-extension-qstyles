import QStyleFactory from './QStyleFactory'
import baseState from './QStyle'
import btnGroupState from './QBtnGroup'
import btnCommonState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtnShared'

class Model extends BaseModel {
  round = void 0
  fab = void 0
  fabMini = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnCommonState, btnGroupState, baseState ] })
export default state
export { Model, mixin }
