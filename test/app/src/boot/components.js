// import something here
import metaService from '../services/metas'

// "async" is optional
export default async ({ Vue }) => {
  await metaService.initialize()
  console.log(metaService.metas)
}
