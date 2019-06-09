import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/btn.js'
import { QBtn } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBtn', QBtn, state, mixin, false)
}
