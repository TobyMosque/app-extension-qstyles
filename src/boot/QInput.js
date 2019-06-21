import QInput from 'quasar-app-extension-qstyles/src/components/QInput.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-input', QInput(ssrContext))
}