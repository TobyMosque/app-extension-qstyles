import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTd'
import { QTd } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTd', component: QTd, state, mixin })
}
