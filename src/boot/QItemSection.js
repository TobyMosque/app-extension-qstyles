import QItemSection from 'quasar-app-extension-qstyles/src/components/QItemSection.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-item-section', QItemSection(ssrContext))
}