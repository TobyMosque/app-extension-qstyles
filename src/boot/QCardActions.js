import QCardActions from 'quasar-app-extension-qstyles/src/components/QCardActions.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-card-actions', QCardActions(ssrContext, true))
}