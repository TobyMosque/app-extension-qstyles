import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/time.js'
import { QTime } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QTime', QTime, state, mixin, { required: true })
}
