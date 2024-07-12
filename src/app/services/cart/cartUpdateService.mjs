import Logger from "../../../../vendor/helpers/logs/Logger.mjs"
import cartModel from "../../../infra/databases/mongodb/models/cartModel.mjs"

export default async (body) => {
    Logger.info('CartOperation :: cartUpdateService :: ', body)
    return cartModel.findOneAndUpdate({ id: body.id }, body)
}