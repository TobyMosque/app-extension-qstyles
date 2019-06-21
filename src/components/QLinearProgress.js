import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QLinearProgress'
import { QLinearProgress } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QLinearProgress', component: QLinearProgress, state, mixin,
    props: { 
      value: {
        type: Number,
        default: 0
      }
    }
  })
}
