const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIAcause_handler = require('../router_handler/DIAcause')

router.get('/getList', DIAcause_handler.getList)

module.exports = router