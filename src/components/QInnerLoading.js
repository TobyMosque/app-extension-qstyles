import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QInnerLoading'
import { QInnerLoading } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QInnerLoading', component: QInnerLoading, state, mixin })
}
