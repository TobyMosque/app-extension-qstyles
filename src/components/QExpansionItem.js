import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QExpansionItem'
import { QExpansionItem } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QExpansionItem', component: QExpansionItem, state, mixin })
}
