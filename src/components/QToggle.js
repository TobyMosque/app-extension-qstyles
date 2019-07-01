import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QToggle'
import { QToggle } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QToggle', component: QToggle, state, mixin })
}
