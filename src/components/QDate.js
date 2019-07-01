import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QDate'
import { QDate } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QDate', component: QDate, state, mixin })
}
