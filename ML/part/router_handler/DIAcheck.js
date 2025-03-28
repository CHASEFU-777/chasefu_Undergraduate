// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcrypt = require('bcryptjs')
// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')


exports.getList = (req,res) => {
  const sql = `select * from checkofdiabetes`
  db.query(sql, (err,results) =>{
    if(err) res.send(err)

    res.send({
      data: results
    })
  })
}