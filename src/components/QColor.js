import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QColor'
import { QColor } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QColor', component: QColor, state, mixin })
}
