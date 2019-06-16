import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QAjaxBar'
import { QAjaxBar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QAjaxBar', component: QAjaxBar, state, mixin })
}
