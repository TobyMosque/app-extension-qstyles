import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/checkbox.js'
import { QCheckbox } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QCheckbox', QCheckbox, state, mixin, { required: true })
}
