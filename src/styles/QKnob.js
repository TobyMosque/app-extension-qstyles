import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import circularProgressState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QCircularProgress'

class Model extends BaseModel {}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ circularProgressState, baseState ] })
export default state
export { Model, mixin }