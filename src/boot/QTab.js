import QTab from 'quasar-app-extension-qstyles/src/components/QTab.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tab', QTab(ssrContext))
}