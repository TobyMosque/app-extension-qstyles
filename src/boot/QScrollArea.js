import QScrollArea from 'quasar-app-extension-qstyles/src/components/QScrollArea.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-scroll-area', QScrollArea(ssrContext))
}