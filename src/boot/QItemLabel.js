import QItemLabel from 'quasar-app-extension-qstyles/src/components/QItemLabel.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-item-label', QItemLabel(ssrContext))
}