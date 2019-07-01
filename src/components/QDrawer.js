import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QDrawer'
import { QDrawer } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QDrawer', component: QDrawer, state, mixin })
}
