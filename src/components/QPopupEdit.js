import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QPopupEdit'
import { QPopupEdit } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QPopupEdit', component: QPopupEdit, state, mixin,
    props: { 
      value: {
        required: true
      }
    }
  })
}
