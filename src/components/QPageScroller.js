import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPageScroller'
import { QPageScroller } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPageScroller', component: QPageScroller, state, mixin })
}
