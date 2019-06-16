import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBadge'
import { QBadge } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBadge', component: QBadge, state, mixin })
}
