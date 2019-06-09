import StyleFactory from './StyleFactory'
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic.js'
import { state as btnGroupState } from 'quasar-app-extension-qstyles/src/styles/btn-group.js'
import { state as btnCommonState } from 'quasar-app-extension-qstyles/src/styles/btn-common.js'
import { Model as BaseModel, state as btnState, mixin as btnMixin } from 'quasar-app-extension-qstyles/src/styles/btn.js'

class Model extends BaseModel {
  contentStyle = undefined
  contentClass = undefined
}
let { state, mixin } = StyleFactory(Model, BaseModel, btnMixin, [ btnState, btnCommonState, btnGroupState, basicState ], {}, undefined)
export { Model, state, mixin }
