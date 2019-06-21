import QFab from 'quasar-app-extension-qstyles/src/components/QFab.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-fab', QFab(ssrContext))
}