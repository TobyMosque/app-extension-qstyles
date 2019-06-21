import QRouteTab from 'quasar-app-extension-qstyles/src/components/QRouteTab.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-route-tab', QRouteTab(ssrContext))
}