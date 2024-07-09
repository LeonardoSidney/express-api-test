import createHash from '../../../../vendor/helpers/hash/createHash.mjs'
import Logger from '../../../../vendor/helpers/logs/Logger.mjs'

export default (body) => {
    Logger.info('CreateCartService :: createCart ::', body)
    const hash = createHash()
    return {
        'id': hash,
        'sessionId': body.sessionId,
        'items': [],
        'total': 0,
        'createdAt': new Date().toISOString(),
        'updatedAt': new Date().toISOString()
    }
}