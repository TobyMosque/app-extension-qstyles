import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/avatar.js'
import { QAvatar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QAvatar', QAvatar, state, mixin, false)
}
