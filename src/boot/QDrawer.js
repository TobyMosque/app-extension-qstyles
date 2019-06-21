import QDrawer from 'quasar-app-extension-qstyles/src/components/QDrawer.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-drawer', QDrawer(ssrContext))
}