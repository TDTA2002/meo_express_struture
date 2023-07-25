/* Kích hoạt .env */
import dotenv from "dotenv"
dotenv.config()

/* Tạo server */
import express from "express";
const server = express()

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_learn_mysql'
});

/* Connect MySQL */
import { mysqlConnect } from "./database/mySQL";
mysqlConnect()

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server đã được chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})