import QStyleBar from 'quasar-app-extension-qstyles/src/components/QBar.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-bar', QStyleBar(ssrContext))
}