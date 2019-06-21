import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QFooter'
import { QFooter } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QFooter', component: QFooter, state, mixin,
    props: {
      value: {
        type: Boolean,
        default: true
      }
    }
  })
}
