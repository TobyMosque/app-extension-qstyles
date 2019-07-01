import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QBreadcrumbsEl'
import { QBreadcrumbsEl } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QBreadcrumbsEl', component: QBreadcrumbsEl, state, mixin })
}
