import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QRating'
import { QRating } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QRating', component: QRating, state, mixin })
}
