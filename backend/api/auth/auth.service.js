const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

async function login(nickname) {
    logger.debug(`auth.service - login with nickname: ${nickname}`)
    const user = await userService.getByUserNickname(nickname)
    if (!user) return Promise.reject('Invalid nickname')
    return user
}

async function signup(nickname, fullname) {
    logger.debug(`auth.service - signup with nickname: ${nickname}, fullname: ${fullname}`)
    if (!nickname || !fullname) return Promise.reject('fullname and nickname are required!')
    return userService.add({ nickname, fullname })
}

module.exports = {
    signup,
    login,
}