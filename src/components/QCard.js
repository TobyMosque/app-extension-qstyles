import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCard'
import { QCard } from 'quasar'

export default function (ssrContext, themed) {
  return ComponentFactory({ ssrContext, name: 'QCard', component: QCard, state, mixin })
}
