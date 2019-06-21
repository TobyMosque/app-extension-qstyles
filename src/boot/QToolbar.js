import QToolbar from 'quasar-app-extension-qstyles/src/components/QToolbar.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-toolbar', QToolbar(ssrContext))
}