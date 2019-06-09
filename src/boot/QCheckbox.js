import QStyleCheckbox from 'quasar-app-extension-qstyles/src/components/QCheckbox.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-checkbox', QStyleCheckbox(ssrContext))
}