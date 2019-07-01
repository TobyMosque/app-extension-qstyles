import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSlider'
import { QSlider } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSlider', component: QSlider, state, mixin })
}
