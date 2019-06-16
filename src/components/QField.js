import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QField'
import { QField } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QField', component: QField, state, mixin })
}
