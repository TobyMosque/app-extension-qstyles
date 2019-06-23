// import something here
import metaService from '../services/metas'
import componentService from '../services/components'

// "async" is optional
export default async ({ Vue, router }) => {
  await metaService.initialize()
  metaService.metaKeys.forEach(metaKey => {
    let dash = metaKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
    let meta = metaService.metas[metaKey]
    let component = componentService.buildProperties(Vue, dash, meta)
    Vue.component(dash + '-properties', component)
  })

  metaService.layouts.forEach(metaKey => {
    let dash = metaKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
    let meta = metaService.metas[metaKey]
    let component = componentService.buildSettings(Vue, dash, meta)
    Vue.component(dash + '-settings', component)
  })

  metaService.components.forEach(metaKey => {
    let dash = metaKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
    let meta = metaService.metas[metaKey]
    let component = componentService.buildSettings(Vue, dash, meta)
    Vue.component(dash + '-settings', component)
  })

  let layouts = metaService.layouts.map(metaKey => {
    let dash = metaKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
    let meta = metaService.metas[metaKey]
    let component = componentService.buildPage(Vue, dash, meta)
    Vue.component(dash + '-demo', () => import('../components/layouts/' + metaKey))
    return { path: dash, component: component }
  })

  router.addRoutes([{
    path: '/layout/',
    component: () => import('layouts/MyLayout.vue'),
    children: layouts
  }])

  let components = metaService.components.map(metaKey => {
    let dash = metaKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substring(1)
    let meta = metaService.metas[metaKey]
    let component = componentService.buildPage(Vue, dash, meta)
    Vue.component(dash + '-demo', () => import('../components/components/' + metaKey))
    return { path: dash, component: component }
  })

  router.addRoutes([{
    path: '/component/',
    component: () => import('layouts/MyLayout.vue'),
    children: components
  }])

  // console.log(router.addRoutes)
}
