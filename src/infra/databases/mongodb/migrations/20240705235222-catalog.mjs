export async function up (CatalogModel) {
  await CatalogModel.create({ id: 'pf0ZoB1FwH6', name: 'Floratta', price: 6000 })
  await CatalogModel.create({ id: 'pmSjGCTfn8w', name: 'Malbec', price: 21000 })
  await CatalogModel.create({ id: 'pht4Xx5nHMB', name: 'Her Code', price: 15000 })
}
export async function down (CatalogModel) {
  await CatalogModel.deleteMany({})
}
