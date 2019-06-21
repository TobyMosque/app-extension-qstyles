import QItem from 'quasar-app-extension-qstyles/src/components/QItem.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-item', QItem(ssrContext))
}