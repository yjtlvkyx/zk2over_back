var express = require('express');
var router = express.Router();
let mysql = require("mysql");

let config = {
    port: 5244,
    user: "root",
    password: "KS18835194520",
    host: "localhost",
    database: "jude"
}

let connection = mysql.createPool(config);
/* GET home page. */
router.post('/datalist', function(req, res, next) {
    let { page, page_list } = req.body;
    let sql = `select * from zk2 limit ${page,page_list}`
    connection.getConnection((err, connect) => {
        if (err) console.log(err, "链接数据库报错");
        connect.query(sql, (err, wras) => {
            if (err) console.log(err, "获取数据报错");
            res.send({ wras });
        })
    })
});

module.exports = router;