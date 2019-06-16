import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import { QBtnGroup } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBtnGroup', component: QBtnGroup, state, mixin })
}
