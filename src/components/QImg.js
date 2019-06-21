import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QImg'
import { QImg } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QImg', component: QImg, state, mixin })
}
