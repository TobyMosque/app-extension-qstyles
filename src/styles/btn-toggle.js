import StyleFactory from './StyleFactory'
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic.js'
import { state as btnGroupState } from 'quasar-app-extension-qstyles/src/styles/btn-group.js'
import { Model as BaseModel, state as btnCommonState, mixin as btnCommonMixin } from 'quasar-app-extension-qstyles/src/styles/btn-common.js'

class Model extends BaseModel {
  contentStyle = undefined
  contentClass = undefined
}
let { state, mixin } = StyleFactory(Model, BaseModel, btnCommonMixin, [ btnCommonState, btnGroupState, basicState ], {}, undefined)
export { Model, state, mixin }
