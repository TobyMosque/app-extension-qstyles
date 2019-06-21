import QSpinner from 'quasar-app-extension-qstyles/src/components/QSpinner.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-spinner', QSpinner(ssrContext))
}