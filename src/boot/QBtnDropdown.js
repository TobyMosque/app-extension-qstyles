import QBtnDropdown from 'quasar-app-extension-qstyles/src/components/QBtnDropdown.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-btn-dropdown', QBtnDropdown(ssrContext))
}