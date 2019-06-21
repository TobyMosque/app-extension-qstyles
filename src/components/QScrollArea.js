import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QScrollArea'
import { QScrollArea } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QScrollArea', component: QScrollArea, state, mixin })
}
