// const express = require('express')
// const router = express.Router()

// // 挂载路由

// // 导入路由处理函数模块
// const userupdate_handler = require('../router_handler/userupdate')

// // 导入验证数据的中间件
// const expressJoi = require('@escook/express-joi')
// // 导入需要的验证规则对象
// const {update_password_schema, update_avatar_schema ,update_nickname_schema} = require('../schema/user')

// // 更新昵称的路由
// router.post('/nickname', expressJoi(update_nickname_schema), userinfo_handler.updateUserInfo)
// // 更新密码的路由
// router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
// // 更换头像的路由
// router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

// module.exports = router
