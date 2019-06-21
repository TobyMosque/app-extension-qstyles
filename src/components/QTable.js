import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTable'
import { QTable } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTable', component: QTable, state, mixin })
}
