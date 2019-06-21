import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QItem'
import { QItem } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QItem', component: QItem, state, mixin })
}
