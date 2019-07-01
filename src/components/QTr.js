import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTr'
import { QTr } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTr', component: QTr, state, mixin })
}
