import { httpService } from './httpService'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    remove,
    update,
    getLoggedinUser,
}

window.userService = userService

function getUsers() {
    return httpService.get(`user`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    user = await httpService.put(`user/${user._id}`, user)
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}


async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

async function getLoggedinUser(userId) {
    const loggedInUser = await httpService.get(`user/${userId}`);
    return loggedInUser;
}

