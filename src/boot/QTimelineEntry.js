import QTimelineEntry from 'quasar-app-extension-qstyles/src/components/QTimelineEntry.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-timeline-entry', QTimelineEntry(ssrContext))
}