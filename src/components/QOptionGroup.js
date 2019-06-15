import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/option-group.js'
import { QOptionGroup } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QOptionGroup', QOptionGroup, state, mixin, { required: true })
}
