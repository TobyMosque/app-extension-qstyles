import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTree'
import { QTree } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTree', component: QTree, state, mixin })
}
