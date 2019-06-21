import ComponentFactory from './QComponentFactory'
import state, { mixin } from 'quasar-app-extension-qstyles/src/styles/QRange'
import { QRange } from 'quasar'

export default function (ssrContext) {
  return ComponentFactory({ ssrContext, name: 'QRange', component: QRange, state, mixin,
    props: { 
      value: {
        type: Object,
        default: () => ({
          min: 0,
          max: 0
        }),
        validator (val) {
          return 'min' in val && 'max' in val
        }
      } 
    }
  })
}
