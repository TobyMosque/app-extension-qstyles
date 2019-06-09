import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/input.js'
import { QInput } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QInput', QInput, state, mixin, [String, Number])
}
