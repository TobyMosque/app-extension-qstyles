import QImg from 'quasar-app-extension-qstyles/src/components/QImg.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-img', QImg(ssrContext))
}