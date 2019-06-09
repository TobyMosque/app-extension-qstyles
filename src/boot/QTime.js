import QStyleTime from 'quasar-app-extension-qstyles/src/components/QTime.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-time', QStyleTime(ssrContext))
}