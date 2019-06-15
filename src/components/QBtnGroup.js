import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/btn-group.js'
import { QBtnGroup } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBtnGroup', QBtnGroup, state, mixin, false)
}
