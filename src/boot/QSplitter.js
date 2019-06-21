import QSplitter from 'quasar-app-extension-qstyles/src/components/QSplitter.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-splitter', QSplitter(ssrContext))
}