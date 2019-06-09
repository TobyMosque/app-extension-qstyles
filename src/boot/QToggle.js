import QStyleToggle from 'quasar-app-extension-qstyles/src/components/QToggle.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-toggle', QStyleToggle(ssrContext))
}