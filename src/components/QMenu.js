import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QMenu'
import { QMenu } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QMenu', component: QMenu, state, mixin })
}
