import QStepperNavigation from 'quasar-app-extension-qstyles/src/components/QStepperNavigation.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-stepper-navigation', QStepperNavigation(ssrContext))
}