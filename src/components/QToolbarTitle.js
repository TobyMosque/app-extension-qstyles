import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QToolbarTitle'
import { QToolbarTitle } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QToolbarTitle', component: QToolbarTitle, state, mixin })
}
