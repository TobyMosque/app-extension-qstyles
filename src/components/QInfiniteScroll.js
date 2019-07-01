import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QInfiniteScroll'
import { QInfiniteScroll } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QInfiniteScroll', component: QInfiniteScroll, state, mixin })
}
