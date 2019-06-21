import QPageContainer from 'quasar-app-extension-qstyles/src/components/QPageContainer.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-page-container', QPageContainer(ssrContext))
}