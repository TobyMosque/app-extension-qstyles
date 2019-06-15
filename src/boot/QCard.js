import QStyleCard from 'quasar-app-extension-qstyles/src/components/QCard.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-card', QStyleCard(ssrContext, true))
}