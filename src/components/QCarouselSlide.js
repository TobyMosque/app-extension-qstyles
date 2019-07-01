import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCarouselSlide'
import { QCarouselSlide } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QCarouselSlide', component: QCarouselSlide, state, mixin })
}
