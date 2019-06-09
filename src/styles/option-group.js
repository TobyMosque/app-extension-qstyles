import StyleFactory from './StyleFactory'
import { Model as BaseModel, state as basicState, mixin as basicMixin } from 'quasar-app-extension-qstyles/src/styles/basic.js'

class Model extends BaseModel {}
let { state, mixin } = StyleFactory(Model, BaseModel, basicMixin, [ basicState ], {}, undefined)
export { Model, state, mixin }
