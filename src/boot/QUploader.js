import QUploader from 'quasar-app-extension-qstyles/src/components/QUploader.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-uploader', QUploader(ssrContext))
}