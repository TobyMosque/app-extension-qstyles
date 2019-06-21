import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QStep'
import { QStep } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QStep', component: QStep, state, mixin,
    props: { 
      name: { required: true },
      disabled: Boolean
    }
  })
}
