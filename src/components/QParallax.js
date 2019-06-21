import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QParallax'
import { QParallax } from 'quasar'  

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QParallax', component: QParallax, state, mixin })
}
