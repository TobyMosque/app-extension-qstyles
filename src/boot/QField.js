import QField from 'quasar-app-extension-qstyles/src/components/QField.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-field', QField(ssrContext))
}