import themer from 'quasar-app-extension-qstyles/src/themer'

export default ({ Vue, ssrContext }) => {
  themer.initialize(ssrContext)
}