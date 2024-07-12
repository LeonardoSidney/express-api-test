import Logger from "../../../../vendor/helpers/logs/Logger.mjs"
import CartModel from "../../../infra/databases/mongodb/models/cartModel.mjs"

export default async (id) => {
    Logger.info('CartOperation :: findCartService :: ', id)
    return CartModel.findOne({ id }).lean()
}