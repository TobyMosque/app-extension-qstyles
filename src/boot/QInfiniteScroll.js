import QInfiniteScroll from 'quasar-app-extension-qstyles/src/components/QInfiniteScroll.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-infinite-scroll', QInfiniteScroll(ssrContext))
}