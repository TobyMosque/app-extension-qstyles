import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBanner'
import { QBanner } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBanner', component: QBanner, state, mixin })
}
