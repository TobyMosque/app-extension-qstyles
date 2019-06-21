import QMenu from 'quasar-app-extension-qstyles/src/components/QMenu.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-menu', QMenu(ssrContext))
}