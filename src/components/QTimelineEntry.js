import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTimelineEntry'
import { QTimelineEntry } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTimelineEntry', component: QTimelineEntry, state, mixin })
}
