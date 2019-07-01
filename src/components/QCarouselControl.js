import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCarouselControl'
import { QCarouselControl } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QCarouselControl', component: QCarouselControl, state, mixin })
}
