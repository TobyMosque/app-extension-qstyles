import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QInput'
import { QInput } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QInput', component: QInput, state, mixin,
    props: { 
      value: [String, Number]
    } 
  })
}
