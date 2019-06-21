import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnGroupState from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import btnCommonState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtnShared'

class Model extends BaseModel {
  round = void 0
  fab = void 0
  fabMini = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnCommonState, btnGroupState, baseState ] })
export default state
export { Model, mixin }
