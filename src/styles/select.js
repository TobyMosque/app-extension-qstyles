import StyleFactory from './StyleFactory'
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic.js'
import { Model as BaseModel, state as fieldState, mixin as fieldMixin } from 'quasar-app-extension-qstyles/src/styles/field.js'

class Model extends BaseModel {
  popupContentClass = undefined
  popupContentStyle = undefined
}
let { state, mixin } = StyleFactory(Model, BaseModel, fieldMixin, [ fieldState, basicState ], {}, undefined)
export { Model, state, mixin }
