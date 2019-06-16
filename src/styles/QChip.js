import QStyleFactory from './QStyleFactory'
import baseState from 'quasar-app-extension-qstyles/src/styles/QStyle'
import btnSharedState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QBtnShared'

class Model extends BaseModel {
  square = void 0
  outline = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ btnSharedState, baseState ], 
  valueProp: {
    type: Boolean,
    default: true
  }
})
export default state
export { Model, mixin }