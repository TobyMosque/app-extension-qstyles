import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QChip'
import { QChip } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QChip', component: QChip, state, mixin })
}
