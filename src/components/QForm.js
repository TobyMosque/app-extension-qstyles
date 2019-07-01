import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QForm'
import { QForm } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QForm', component: QForm, state, mixin })
}
