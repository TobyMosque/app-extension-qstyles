import QStyleBtnDropdown from 'quasar-app-extension-qstyles/src/components/QBtnDropdown.js'

export default ({ Vue, ssrContext }) => {
  console.log('t')
  Vue.component('q-btn-dropdown', QStyleBtnDropdown(ssrContext))
}