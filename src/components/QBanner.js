import ComponentFactory from './ComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/banner.js'
import { QBanner } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory(ssrContext, 'QBanner', QBanner, state, mixin, false)
}
