import QPopupEdit from 'quasar-app-extension-qstyles/src/components/QPopupEdit.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-popup-edit', QPopupEdit(ssrContext))
}