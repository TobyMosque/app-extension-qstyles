import QRating from 'quasar-app-extension-qstyles/src/components/QRating.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-rating', QRating(ssrContext))
}