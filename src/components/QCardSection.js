import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QCardSection'
import { QCardSection } from 'quasar'

export default function (ssrContext, themed) {
  return ComponentFactory({ ssrContext, name: 'QCardSection', component: QCardSection, state, mixin })
}
