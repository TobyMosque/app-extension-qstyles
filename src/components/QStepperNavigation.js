import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QStepperNavigation'
import { QStepperNavigation } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QStepperNavigation', component: QStepperNavigation, state, mixin })
}
