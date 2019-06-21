import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QHeader'
import { QHeader } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QHeader', component: QHeader, state, mixin,
    props: {
      value: {
        type: Boolean,
        default: true
      }
    }
  })
}
