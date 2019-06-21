import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPullToRefresh'
import { QPullToRefresh } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPullToRefresh', component: QPullToRefresh, state, mixin })
}
