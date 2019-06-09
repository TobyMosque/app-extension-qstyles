import QStyleRadio from 'quasar-app-extension-qstyles/src/components/QRadio.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-radio', QStyleRadio(ssrContext))
}