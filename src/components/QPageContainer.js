import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPageContainer'
import { QPageContainer } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPageContainer', component: QPageContainer, state, mixin })
}
