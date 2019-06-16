import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QDialog'
import { QDialog } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QDialog', component: QDialog, state, mixin })
}
