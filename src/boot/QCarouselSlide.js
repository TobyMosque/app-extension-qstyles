import QCarouselSlide from 'quasar-app-extension-qstyles/src/components/QCarouselSlide.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-carousel-slide', QCarouselSlide(ssrContext))
}