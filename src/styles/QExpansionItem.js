import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  expandIconClass = void 0
  denseToggle = void 0
  headerStyle = void 0
  headerClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ],
  valueProp: {
    "desc": "Model of the component defining 'open' state; Either use this property (along with a listener for 'input' event) OR use v-model directive",
    "category": "model"
  }
})
export default state
export { Model, mixin }