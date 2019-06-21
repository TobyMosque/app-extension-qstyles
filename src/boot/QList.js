import QList from 'quasar-app-extension-qstyles/src/components/QList.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-list', QList(ssrContext))
}