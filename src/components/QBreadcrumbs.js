import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBreadcrumbs'
import { QBreadcrumbs } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBreadcrumbs', component: QBreadcrumbs, state, mixin })
}
