import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTime'
import { QTime } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTime', component: QTime, state, mixin })
}
