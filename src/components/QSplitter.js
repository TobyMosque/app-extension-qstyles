import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSplitter'
import { QSplitter } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSplitter', component: QSplitter, state, mixin })
}
