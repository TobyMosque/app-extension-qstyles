import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPage'
import { QPage } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPage', component: QPage, state, mixin })
}
