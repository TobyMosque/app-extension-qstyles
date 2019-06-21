import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTimeline'
import { QTimeline } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTimeline', component: QTimeline, state, mixin })
}
