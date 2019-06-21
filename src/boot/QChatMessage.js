import QChatMessage from 'quasar-app-extension-qstyles/src/components/QChatMessage.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-chat-message', QChatMessage(ssrContext))
}