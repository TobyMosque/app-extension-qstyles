import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/radio.js'
import { QRadio } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QRadio', QRadio, state, mixin, { required: true })
}
