import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/ajax-bar.js'
import { QAjaxBar } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QAjaxBar', QAjaxBar, state, mixin, false)
}
