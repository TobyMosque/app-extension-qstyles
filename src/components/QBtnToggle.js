import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/btn-toggle.js'
import { QBtnToggle } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBtnToggle', QBtnToggle, state, mixin, { required: true })
}
