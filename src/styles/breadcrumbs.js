import StyleFactory from './StyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/base.js'

class Model extends BaseModel {
  activeColor = void 0
  separatorColor = void 0
}
let { state, mixin } = StyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ] })
export default state
export { Model, mixin }