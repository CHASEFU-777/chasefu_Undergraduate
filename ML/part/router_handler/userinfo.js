// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcrypt = require('bcryptjs')
// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')


exports.getList = (req,res) => {
  const sql = `select * from userinfo`
  db.query(sql, (err,results) =>{
    if(err) res.send(err)

    res.send({
      data: results
    })
  })
}

exports.updateUserInfo = (req, res) => {
  // 定义待执行的 SQL 语句
  const sql = `update userinfo set ? where id=?`
  // 调用 db.query() 执行 SQL 语句并传递参数
  db.query(sql, [req.body, req.body.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！')
    // 成功
    res.cc('更新用户信息成功！', 0)
  })
}