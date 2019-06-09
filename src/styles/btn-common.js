import StyleFactory from './StyleFactory'
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic.js'
import { Model as BaseModel, state as btnGroupState, mixin as btnGroupMixin } from 'quasar-app-extension-qstyles/src/styles/btn-group.js'

class Model extends BaseModel {
  ripple = undefined
  size = undefined
}
let { state, mixin } = StyleFactory(Model, BaseModel, btnGroupMixin, [ btnGroupState, basicState ], {}, undefined)
export { Model, state, mixin }
