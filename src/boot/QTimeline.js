import QTimeline from 'quasar-app-extension-qstyles/src/components/QTimeline.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-timeline', QTimeline(ssrContext))
}