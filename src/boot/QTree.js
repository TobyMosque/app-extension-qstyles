import QTree from 'quasar-app-extension-qstyles/src/components/QTree.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tree', QTree(ssrContext))
}