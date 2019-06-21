import QPageSticky from 'quasar-app-extension-qstyles/src/components/QPageSticky.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-page-sticky', QPageSticky(ssrContext))
}