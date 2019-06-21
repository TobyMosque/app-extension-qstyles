import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPageSticky'
import { QPageSticky } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPageSticky', component: QPageSticky, state, mixin })
}
