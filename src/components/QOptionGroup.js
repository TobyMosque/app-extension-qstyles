import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QOptionGroup'
import { QOptionGroup } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QOptionGroup', component: QOptionGroup, state, mixin, valueProp: { required: true } })
}
