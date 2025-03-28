const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const Treatment_handler = require('../router_handler/Treatment')

router.get('/getList', Treatment_handler.getList)

module.exports = router