import QFabAction from 'quasar-app-extension-qstyles/src/components/QFabAction.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-fab-action', QFabAction(ssrContext))
}