import QParallax from 'quasar-app-extension-qstyles/src/components/QParallax.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-parallax', QParallax(ssrContext))
}