import QTooltip from 'quasar-app-extension-qstyles/src/components/QTooltip.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-tooltip', QTooltip(ssrContext))
}