import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPagination'
import { QPagination } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPagination', component: QPagination, state, mixin })
}
