import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCarousel'
import { QCarousel } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QCarousel', component: QCarousel, state, mixin,
    props: { 
      value: { required: true }
    }
  })
}
