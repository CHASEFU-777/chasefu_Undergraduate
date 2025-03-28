const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIAdiagnose_handler = require('../router_handler/DIAdiagnose')

router.get('/getList', DIAdiagnose_handler.getList)

module.exports = router