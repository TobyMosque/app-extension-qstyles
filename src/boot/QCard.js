import QCard from 'quasar-app-extension-qstyles/src/components/QCard.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-card', QCard(ssrContext, true))
}