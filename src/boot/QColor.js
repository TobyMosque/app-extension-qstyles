import QColor from 'quasar-app-extension-qstyles/src/components/QColor.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-color', QColor(ssrContext))
}