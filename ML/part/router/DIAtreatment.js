const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIAtreatment_handler = require('../router_handler/DIAtreatment')

router.get('/getList', DIAtreatment_handler.getList)

module.exports = router