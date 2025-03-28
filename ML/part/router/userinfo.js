const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const userinfo_handler = require('../router_handler/userinfo')
const expressJoi = require('@escook/express-joi')
const {update_password_schema, update_avatar_schema ,update_nickname_schema,update_email_schema} = require('../schema/user')

//获取用户信息的路由
router.get('/getList', userinfo_handler.getList)
// 更新昵称的路由
router.post('/nickname', expressJoi(update_nickname_schema), userinfo_handler.updateUserInfo)
// 更新邮箱的路由
router.post('/email', expressJoi(update_email_schema), userinfo_handler.updateUserInfo)
// 更新生日的路由
// router.post('/birthday', expressJoi(update_birthday_schema), userinfo_handler.updateUserInfo)
//更新地域的路由
// router.post('/province', expressJoi(update_province_schema), userinfo_handler.updateUserInfo)

module.exports = router