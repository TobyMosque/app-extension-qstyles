import QStep from 'quasar-app-extension-qstyles/src/components/QStep.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-step', QStep(ssrContext))
}