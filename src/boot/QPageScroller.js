import QPageScroller from 'quasar-app-extension-qstyles/src/components/QPageScroller.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-page-scroller', QPageScroller(ssrContext))
}