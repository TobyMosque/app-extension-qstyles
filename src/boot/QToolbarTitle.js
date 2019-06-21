import QToolbarTitle from 'quasar-app-extension-qstyles/src/components/QToolbarTitle.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-toolbar-title', QToolbarTitle(ssrContext))
}