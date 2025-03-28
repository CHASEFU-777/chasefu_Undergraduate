const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const TypesOfComplications_handler = require('../router_handler/TypesOfComplications')

router.get('/getList', TypesOfComplications_handler.getList)

module.exports = router