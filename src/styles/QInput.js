import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import fieldState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QField'

class Model extends BaseModel {
  inputClass = void 0
  inputStyle = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ fieldState, baseState ] })
export default state
export { Model, mixin }