import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QRadio'
import { QRadio } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QRadio', component: QRadio, state, mixin })
}
