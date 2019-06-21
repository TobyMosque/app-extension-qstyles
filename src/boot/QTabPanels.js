import QTabPanels from 'quasar-app-extension-qstyles/src/components/QTabPanels.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tab-panels', QTabPanels(ssrContext))
}