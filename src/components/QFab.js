import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QFab'
import { QFab } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QFab', component: QFab, state, mixin })
}
