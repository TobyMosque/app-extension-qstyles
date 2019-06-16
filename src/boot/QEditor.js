import QStyleEditor from 'quasar-app-extension-qstyles/src/components/QEditor.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-editor', QStyleEditor(ssrContext))
}