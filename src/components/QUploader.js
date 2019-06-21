import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QUploader'
import { QUploader } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QUploader', component: QUploader, state, mixin })
}
