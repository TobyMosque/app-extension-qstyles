import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QEditor'
import { QEditor } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QEditor', component: QEditor, state, mixin })
}
