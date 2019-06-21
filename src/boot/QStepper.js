import QStepper from 'quasar-app-extension-qstyles/src/components/QStepper.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-stepper', QStepper(ssrContext))
}