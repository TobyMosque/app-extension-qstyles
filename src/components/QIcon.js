import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QIcon'
import { QIcon } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QIcon', component: QIcon, state, mixin })
}
