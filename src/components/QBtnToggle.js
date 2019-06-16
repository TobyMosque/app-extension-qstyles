import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBtnToggle'
import { QBtnToggle } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBtnToggle', component: QBtnToggle, state, mixin, valueProp: { required: true } })
}
