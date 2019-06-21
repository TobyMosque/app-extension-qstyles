import QBar from 'quasar-app-extension-qstyles/src/components/QBar.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-bar', QBar(ssrContext))
}