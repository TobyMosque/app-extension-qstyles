import QHeader from 'quasar-app-extension-qstyles/src/components/QHeader.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-header', QHeader(ssrContext))
}