import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCircularProgress'
import { QCircularProgress } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QCircularProgress', component: QCircularProgress, state, mixin })
}
