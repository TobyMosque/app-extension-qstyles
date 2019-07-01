import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTabPanel'
import { QTabPanel } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTabPanel', component: QTabPanel, state, mixin })
}
