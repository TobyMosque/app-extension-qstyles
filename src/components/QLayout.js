import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QLayout'
import { QLayout } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QLayout', component: QLayout, state, mixin })
}
