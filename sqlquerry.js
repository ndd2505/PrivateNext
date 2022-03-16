const mysql = require('mysql2');
const connection = mysql.createConnection(`mysql://4e3ydvcarv0p:pscale_pw__YiuQ4muUdpTVOvPO5BwG-jz__50r1jgB4wb0PfQn8Y@qq30jitimhcw.ap-southeast-2.psdb.cloud/firstdemo?ssl={"rejectUnauthorized":true}`)

function fnDemo() {
    connection.connect()

    connection.query('create table', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
    })

    // connection.end()
}

module.exports = {
    fnDemo
}