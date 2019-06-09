import QStyleBtn from 'quasar-app-extension-qstyles/src/components/QBtn.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-btn', QStyleBtn(ssrContext))
}