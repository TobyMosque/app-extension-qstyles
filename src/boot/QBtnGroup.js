import QBtnGroup from 'quasar-app-extension-qstyles/src/components/QBtnGroup.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-btn-group', QBtnGroup(ssrContext))
}