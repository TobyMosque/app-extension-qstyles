import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/select.js'
import { QSelect } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QSelect', QSelect, state, mixin, { required: true })
}
