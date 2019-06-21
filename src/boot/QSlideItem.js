import QSlideItem from 'quasar-app-extension-qstyles/src/components/QSlideItem.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-slide-item', QSlideItem(ssrContext))
}