import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSpinner'
import { QSpinner } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSpinner', component: QSpinner, state, mixin })
}
