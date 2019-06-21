import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QFabAction'
import { QFabAction } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QFabAction', component: QFabAction, state, mixin,
    props: {
      value: Boolean
    }
  })
}
