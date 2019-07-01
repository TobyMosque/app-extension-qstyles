import QForm from 'quasar-app-extension-qstyles/src/components/QForm.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-form', QForm(ssrContext))
}