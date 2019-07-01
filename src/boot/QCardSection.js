import QCardSection from 'quasar-app-extension-qstyles/src/components/QCardSection.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-card-section', QCardSection(ssrContext, true))
}