import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QItemSection'
import { QItemSection } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QItemSection', component: QItemSection, state, mixin })
}
