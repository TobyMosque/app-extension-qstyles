import QKnob from 'quasar-app-extension-qstyles/src/components/QKnob.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-inner-knob', QKnob(ssrContext))
}