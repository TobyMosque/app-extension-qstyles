import QTd from 'quasar-app-extension-qstyles/src/components/QTd.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-td', QTd(ssrContext))
}