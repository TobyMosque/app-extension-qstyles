import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBtnDropdown'
import { QBtnDropdown } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBtnDropdown', component: QBtnDropdown, state, mixin })
}
