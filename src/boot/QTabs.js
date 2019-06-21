import QTabs from 'quasar-app-extension-qstyles/src/components/QTabs.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tabs', QTabs(ssrContext))
}