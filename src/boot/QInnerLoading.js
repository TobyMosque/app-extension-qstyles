import QInnerLoading from 'quasar-app-extension-qstyles/src/components/QInnerLoading.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-inner-loading', QInnerLoading(ssrContext))
}