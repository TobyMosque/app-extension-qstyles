import QIcon from 'quasar-app-extension-qstyles/src/components/QIcon.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-icon', QIcon(ssrContext))
}