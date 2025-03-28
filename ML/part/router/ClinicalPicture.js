const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const ClinicalPicture_handler = require('../router_handler/ClinicalPicture')

router.get('/getList', ClinicalPicture_handler.getList)

module.exports = router