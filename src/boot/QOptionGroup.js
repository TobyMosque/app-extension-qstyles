import QStyleOptionGroup from 'quasar-app-extension-qstyles/src/components/QOptionGroup.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-option-group', QStyleOptionGroup(ssrContext))
}