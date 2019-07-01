import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCardActions'
import { QCardActions } from 'quasar'

export default function (ssrContext, themed) {
  return ComponentFactory({ ssrContext, name: 'QCardActions', component: QCardActions, state, mixin })
}
