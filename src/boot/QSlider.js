import QSlider from 'quasar-app-extension-qstyles/src/components/QSlider.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-slider', QSlider(ssrContext))
}