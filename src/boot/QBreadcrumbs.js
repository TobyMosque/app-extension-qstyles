import QStyleBreadcrumbs from 'quasar-app-extension-qstyles/src/components/QBreadcrumbs.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-breadcrumbs', QStyleBreadcrumbs(ssrContext))
}