import QStyleChip from 'quasar-app-extension-qstyles/src/components/QChip.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-style', QStyleChip(ssrContext))
}