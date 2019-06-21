import QPopupProxy from 'quasar-app-extension-qstyles/src/components/QPopupProxy.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-popup-proxy', QPopupProxy(ssrContext))
}