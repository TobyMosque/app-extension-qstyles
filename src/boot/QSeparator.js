import QSeparator from 'quasar-app-extension-qstyles/src/components/QSeparator.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-separator', QSeparator(ssrContext))
}