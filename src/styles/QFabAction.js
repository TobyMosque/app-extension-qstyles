import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnGroupState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'

class Model extends BaseModel {}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnGroupState, baseState ] })
export default state
export { Model, mixin }
