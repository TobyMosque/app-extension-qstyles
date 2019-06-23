import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QRouteTab'
import { QRouteTab } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QRouteTab', component: QRouteTab, state, mixin,
    props: { 
      value: [Number, String]
    }
  })
}
