import QBreadcrumbsEl from 'quasar-app-extension-qstyles/src/components/QBreadcrumbsEl.js'

export default ({ Vue, ssrContext }) => {
  Vue.component('q-breadcrumbs-el', QBreadcrumbsEl(ssrContext))
}