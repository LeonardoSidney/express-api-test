import Logger from '../../../../vendor/helpers/logs/Logger.mjs'

export default (body) => {
    Logger.info('CartOperation :: createCart ::', body)
    return {
        'sessionId': body.sessionId
    }
}