import QDate from 'quasar-app-extension-qstyles/src/components/QDate.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-date', QDate(ssrContext))
}