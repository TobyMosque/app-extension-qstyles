import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSelect'
import { QSelect } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSelect', component: QSelect, state, mixin })
}
