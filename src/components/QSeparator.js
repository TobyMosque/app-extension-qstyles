import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/separator.js'
import { QSeparator } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QSeparator', QSeparator, state, mixin, false)
}
