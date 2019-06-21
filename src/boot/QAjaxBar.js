import QAjaxBar from 'quasar-app-extension-qstyles/src/components/QAjaxBar.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-ajax-bar', QAjaxBar(ssrContext))
}