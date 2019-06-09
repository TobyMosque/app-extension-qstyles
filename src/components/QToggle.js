import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/toggle.js'
import { QToggle } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QToggle', QToggle, state, mixin, { required: true })
}
