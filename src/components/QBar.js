import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/bar.js'
import { QBar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBar', QBar, state, mixin, false)
}
