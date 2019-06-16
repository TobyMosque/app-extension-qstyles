import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBtn'
import { QBtn } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBtn', component: QBtn, state, mixin })
}
