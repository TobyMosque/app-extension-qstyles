import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTooltip'
import { QTooltip } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTooltip', component: QTooltip, state, mixin })
}
