import QTh from 'quasar-app-extension-qstyles/src/components/QTh.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-th', QTh(ssrContext))
}