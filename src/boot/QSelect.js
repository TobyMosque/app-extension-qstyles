import QStyleSelect from 'quasar-app-extension-qstyles/src/components/QSelect.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-select', QStyleSelect(ssrContext))
}