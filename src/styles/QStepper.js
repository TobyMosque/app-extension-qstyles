import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import panelsState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QPanels'

class Model extends BaseModel {}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ panelsState, baseState ] })
export default state
export { Model, mixin }