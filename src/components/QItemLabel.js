import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QItemLabel'
import { QItemLabel } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QItemLabel', component: QItemLabel, state, mixin })
}
