import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import popupState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QPopup'

class Model extends BaseModel { }
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ popupState, baseState ] })
export default state
export { Model, mixin }