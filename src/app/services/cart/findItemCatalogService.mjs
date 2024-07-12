import Logger from "../../../../vendor/helpers/logs/Logger.mjs"
import CatalogModel from "../../../domain/databases/mongodb/models/catalog.mjs"

export default async body => {
    Logger.info('CartOperation :: findItemCatalogService :: ', body)
    return CatalogModel.findOne({ productId : body.productId }).lean()
}