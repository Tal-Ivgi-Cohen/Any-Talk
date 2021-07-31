const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

async function login(nickname, password) {
    logger.debug(`auth.service - login with nickname: ${nickname}`)
    const user = await userService.getByUserNickname(nickname)
    if (!user) return Promise.reject('Invalid nickname')
    delete user.password
    return user
}

async function signup(nickname, password, fullname) {
    logger.debug(`auth.service - signup with nickname: ${nickname}, fullname: ${fullname}`)
    if (!nickname || !password || !fullname) return Promise.reject('fullname, username and password are required!')
    return userService.add({ nickname, password, fullname})

}

module.exports = {
    signup,
    login,
}