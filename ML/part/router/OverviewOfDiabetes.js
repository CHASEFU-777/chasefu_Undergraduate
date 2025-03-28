const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const OverviewOfDiabetes_handler = require('../router_handler/OverviewOfDiabetes')

router.get('/getList', OverviewOfDiabetes_handler.getList)

module.exports = router