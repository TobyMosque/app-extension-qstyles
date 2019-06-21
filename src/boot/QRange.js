import QRange from 'quasar-app-extension-qstyles/src/components/QRange.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-range', QRange(ssrContext))
}