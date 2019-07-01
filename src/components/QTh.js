import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTh'
import { QTh } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTh', component: QTh, state, mixin })
}
