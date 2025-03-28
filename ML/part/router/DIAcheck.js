const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIAcheck_handler = require('../router_handler/DIAcheck')

router.get('/getList', DIAcheck_handler.getList)

module.exports = router