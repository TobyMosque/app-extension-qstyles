import QExpansionItem from 'quasar-app-extension-qstyles/src/components/QExpansionItem.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-expansion-item', QExpansionItem(ssrContext))
}