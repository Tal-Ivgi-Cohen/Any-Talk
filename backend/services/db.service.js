var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'sql4.freemysqlhosting.net',
    port: 3306,
    user: 'sql4426686',
    password: 'MmVIzs5QaS',
    database: 'sql4426686',
    insecureAuth: true
});

connection.connect(err => {
    if (err) throw new Error('mySql failed connection');
    console.log('connected to SQL server');
})


function runSQL(sqlCommand) {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, function (error, results, fields) {
            console.log(results,fields)
            if (error) reject(error);
            else resolve(results);
        });
    })
}

module.exports = {
    runSQL
}