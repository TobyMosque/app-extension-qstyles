import QFooter from 'quasar-app-extension-qstyles/src/components/QFooter.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-footer', QFooter(ssrContext))
}