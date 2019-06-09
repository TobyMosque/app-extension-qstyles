import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/range.js'
import { QRange } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QRange', QRange, state, mixin, {
    type: Object,
    default: () => ({
      min: 0,
      max: 0
    }),
    validator (val) {
      return 'min' in val && 'max' in val
    }
  })
}
