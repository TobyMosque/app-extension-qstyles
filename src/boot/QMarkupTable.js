import QMarkupTable from 'quasar-app-extension-qstyles/src/components/QMarkupTable.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-markup-table', QMarkupTable(ssrContext))
}