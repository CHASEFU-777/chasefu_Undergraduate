const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const DIApicture_handler = require('../router_handler/DIApicture')

router.get('/getList', DIApicture_handler.getList)

module.exports = router