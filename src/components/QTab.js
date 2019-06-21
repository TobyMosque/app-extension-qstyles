import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTab'
import { QTab } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTab', component: QTab, state, mixin,
    props: { 
      value: [Number, String]
    }
  })
}
