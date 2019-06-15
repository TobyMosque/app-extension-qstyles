import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/field.js'
import { QField } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QField', QField, state, mixin, false)
}
