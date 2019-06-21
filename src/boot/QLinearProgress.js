import QLinearProgress from 'quasar-app-extension-qstyles/src/components/QLinearProgress.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-linear-progress', QLinearProgress(ssrContext))
}