import QBanner from 'quasar-app-extension-qstyles/src/components/QBanner.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-banner', QBanner(ssrContext))
}