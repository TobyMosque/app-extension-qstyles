import QStyleCarousel from 'quasar-app-extension-qstyles/src/components/QCarousel.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-carousel', QStyleCarousel(ssrContext))
}