import QStyleBadge from 'quasar-app-extension-qstyles/src/components/QBadge.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-badge', QStyleBadge(ssrContext))
}