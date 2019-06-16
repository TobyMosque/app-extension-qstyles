import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCheckbox'
import { QCheckbox } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QCheckbox', component: QCheckbox, state, mixin, valueProp: { required: true } })
}
