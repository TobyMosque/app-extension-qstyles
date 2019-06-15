import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/breadcrumbs.js'
import { QBreadcrumbs } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBreadcrumbs', QBreadcrumbs, state, mixin, false)
}
