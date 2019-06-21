import QVideo from 'quasar-app-extension-qstyles/src/components/QVideo.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-video', QVideo(ssrContext))
}