import catalogModel from '../models/catalog.mjs'

export async function up (model) {
  await catalogModel.create({ id: 'pf0ZoB1FwH6', name: 'Floratta', price: 6000 })
  await catalogModel.create({ id: 'pmSjGCTfn8w', name: 'Malbec', price: 21000 })
  await catalogModel.create({ id: 'pht4Xx5nHMB', name: 'Her Code', price: 15000 })
}
export async function down (model) {
  await catalogModel.deleteMany({})
}
