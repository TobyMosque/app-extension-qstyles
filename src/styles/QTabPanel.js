import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import panelState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QPanel'

class Model extends BaseModel { }
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ panelState, baseState ] })
export default state
export { Model, mixin }