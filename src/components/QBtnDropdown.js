import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/btn-dropdown.js'
import { QBtnDropdown } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBtnDropdown', QBtnDropdown, state, mixin, false)
}
