const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIAidentify_handler = require('../router_handler/DIAidentify')

router.get('/getList', DIAidentify_handler.getList)

module.exports = router