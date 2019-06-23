import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import tabState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QTab'

class Model extends BaseModel {}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ tabState, baseState ] })
export default state
export { Model, mixin }