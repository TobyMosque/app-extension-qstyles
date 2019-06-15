import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/date.js'
import { QDate } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QDate', QDate, state, mixin, { required: true })
}
