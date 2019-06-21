import QCircularProgress from 'quasar-app-extension-qstyles/src/components/QCircularProgress.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-circular-progress', QCircularProgress(ssrContext))
}