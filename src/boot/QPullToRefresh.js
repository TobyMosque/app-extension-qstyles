import QPullToRefresh from 'quasar-app-extension-qstyles/src/components/QPullToRefresh.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-pull-to-refresh', QPullToRefresh(ssrContext))
}