import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QVideo'
import { QVideo } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QVideo', component: QVideo, state, mixin })
}
