import QEditor from 'quasar-app-extension-qstyles/src/components/QEditor.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-editor', QEditor(ssrContext))
}