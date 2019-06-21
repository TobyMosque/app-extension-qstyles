import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QToolbar'
import { QToolbar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QToolbar', component: QToolbar, state, mixin })
}
