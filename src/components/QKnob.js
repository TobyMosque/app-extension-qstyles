import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QKnob'
import { QKnob } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QKnob', component: QKnob, state, mixin })
}
