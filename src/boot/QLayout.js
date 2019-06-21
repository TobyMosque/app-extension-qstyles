import QLayout from 'quasar-app-extension-qstyles/src/components/QLayout.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-layout', QLayout(ssrContext))
}