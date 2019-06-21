import QTabPanel from 'quasar-app-extension-qstyles/src/components/QTabPanel.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tab-panel', QTabPanel(ssrContext))
}