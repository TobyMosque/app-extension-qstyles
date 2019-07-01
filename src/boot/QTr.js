import QTr from 'quasar-app-extension-qstyles/src/components/QTr.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tr', QTr(ssrContext))
}