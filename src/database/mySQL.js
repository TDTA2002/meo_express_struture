import dotenv from "dotenv"
dotenv.config()
var mysql = require('mysql');
var mysql = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER_NAME,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE_NAME,
});

function mysqlConnect() {
    try {
        mysql.connect(err => {
            if (err) {
                console.error('error connecting: ', err.sqlMessage);
                return;
            } else {
                console.log('kết nối MYSQL thành công!');
            }
        });
    } catch (err) {
        console.log("Loi cu phap", err);
    }
}

module.exports = {
    mysqlConnect,
    mysql
}