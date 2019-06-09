import QStyleBtnTogle from 'quasar-app-extension-qstyles/src/components/QBtnToggle.js'

export default ({ Vue, ssrContext }) => {
  console.log('t')
  Vue.component('q-btn-toggle', QStyleBtnTogle(ssrContext))
}