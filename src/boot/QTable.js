import QTable from 'quasar-app-extension-qstyles/src/components/QTable.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-table', QTable(ssrContext))
}