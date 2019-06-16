import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBar'
import { QBar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBar', component: QBar, state, mixin })
}
