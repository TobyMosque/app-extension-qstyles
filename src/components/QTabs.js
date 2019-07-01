import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTabs'
import { QTabs } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTabs', component: QTabs, state, mixin })
}
