import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QSlideItem'
import { QSlideItem } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QSlideItem', component: QSlideItem, state, mixin })
}
