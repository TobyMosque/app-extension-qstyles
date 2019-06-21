import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QList'
import { QList } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QList', component: QList, state, mixin })
}
