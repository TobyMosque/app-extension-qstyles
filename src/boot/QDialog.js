import QDialog from 'quasar-app-extension-qstyles/src/components/QDialog.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-dialog', QDialog(ssrContext))
}