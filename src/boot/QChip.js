import QChip from 'quasar-app-extension-qstyles/src/components/QChip.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-style', QChip(ssrContext))
}