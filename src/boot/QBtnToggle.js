import QBtnTogle from 'quasar-app-extension-qstyles/src/components/QBtnToggle.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-btn-toggle', QBtnTogle(ssrContext))
}