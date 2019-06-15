import StyleFactory from './StyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/base.js'
import fieldState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/field.js'

class Model extends BaseModel {
  inputClass = void 0
  inputStyle = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ fieldState, baseState ] })
export default state
export { Model, mixin }