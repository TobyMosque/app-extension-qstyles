import QStyleDialog from 'quasar-app-extension-qstyles/src/components/QDialog.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-dialog', QStyleDialog(ssrContext))
}