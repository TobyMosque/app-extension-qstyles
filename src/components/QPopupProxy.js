import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPopupProxy'
import { QPopupProxy } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPopupProxy', component: QPopupProxy, state, mixin })
}
