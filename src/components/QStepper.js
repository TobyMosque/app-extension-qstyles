import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QStepper'
import { QStepper } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QStepper', component: QStepper, state, mixin,
    props: { 
      value: { required: true }
    }
  })
}
