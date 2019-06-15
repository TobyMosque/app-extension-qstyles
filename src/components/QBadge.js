import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/badge.js'
import { QBadge } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBadge', QBadge, state, mixin, false)
}
