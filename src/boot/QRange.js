import QStyleRange from 'quasar-app-extension-qstyles/src/components/QRange.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-range', QStyleRange(ssrContext))
}