import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QAvatar'
import { QAvatar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QAvatar', component: QAvatar, state, mixin })
}
