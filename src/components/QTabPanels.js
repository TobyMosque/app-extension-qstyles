import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QTabPanels'
import { QTabPanels } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QTabPanels', component: QTabPanels, state, mixin,
    props: { 
      value: { required: true }
    }
  })
}
