import QCarouselControl from 'quasar-app-extension-qstyles/src/components/QCarouselControl.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-carousel-control', QCarouselControl(ssrContext))
}