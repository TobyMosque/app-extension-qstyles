import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import layoutState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QLayout'

class Model extends BaseModel { }
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ layoutState, baseState ] })
export default state
export { Model, mixin }
