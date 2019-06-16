import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QChatMessage'
import { QChatMessage } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QChatMessage', component: QChatMessage, state, mixin })
}
