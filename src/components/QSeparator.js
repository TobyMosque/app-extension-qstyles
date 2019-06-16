import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSeparator'
import { QSeparator } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSeparator', component: QSeparator, state, mixin })
}
