import QPage from 'quasar-app-extension-qstyles/src/components/QPage.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-page', QPage(ssrContext))
}