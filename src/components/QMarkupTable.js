import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QMarkupTable'
import { QMarkupTable } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QMarkupTable', component: QMarkupTable, state, mixin })
}
