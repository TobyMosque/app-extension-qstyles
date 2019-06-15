import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/card.js'
import { QCard } from 'quasar'

export default function (ssrContext, themed) {
  return ComponentFactory(ssrContext, 'QCard', QCard, state, mixin, false, themed)
}
