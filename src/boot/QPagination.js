import QPagination from 'quasar-app-extension-qstyles/src/components/QPagination.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-pagination', QPagination(ssrContext))
}