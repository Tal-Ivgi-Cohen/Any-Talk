
const dbService = require('../../services/db.service')

module.exports = {
    query,
    getById,
    getByUserNickname,
    remove,
    update,
    add
}


function query(criteria = {}) {
    var namePart = criteria.name || '';
    var query = `SELECT * FROM user  WHERE user.nickname LIKE '%${namePart}%'`;

    return dbService.runSQL(query)
}


async function getById(userId) {
    var query = `SELECT * FROM user WHERE user._id = ${userId}`;
    var users = await dbService.runSQL(query);
    if (users.length === 1) return users[0];
    throw new Error(`user id ${userId} not found`);
}


async function getByUserNickname(nickname) {

    var query=`SELECT * FROM user WHERE nickname= "${nickname}"`; 
    console.log('query',query);
    var users = await dbService.runSQL(query);
    if (users.length === 1) return users[0];
    throw new Error(`user nickname ${nickname} not found`);	
}


async function remove(userId) {
    var query = `DELETE FROM user WHERE user._id = ${userId}`;

    return dbService.runSQL(query)
        .then(okPacket => okPacket.affectedRows === 1
            ? okPacket
            : Promise.reject(new Error(`No user deleted - user id ${userId}`)));
}

async function update(user) {
    var query = `UPDATE user set name = "${user.nickname}",
                                fullname = "${user.fullname}"
                WHERE user._id = ${user._id}`;

    var okPacket = await dbService.runSQL(query);
    if (okPacket.affectedRows !== 0) return okPacket;
    throw new Error(`No user updated - user id ${user._id}`);
}

async function add(user) {

    var query = `INSERT INTO user (nickname, fullname)
    VALUES ("${user.nickname}",
            "${user.fullname}")`;

    var okPacket = await dbService.runSQL(query);
    console.log('okPacket is : ', okPacket)
    return okPacket;
}

