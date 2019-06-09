import ComponentFactory from './ComponentFactory'
import { state, mixin } from 'quasar-app-extension-qstyles/src/styles/range.js'
import { QSlider } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QSlider', QSlider, state, mixin, {
    type: Number,
    required: true
  })
}
