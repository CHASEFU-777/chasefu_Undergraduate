const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const TheCauseOfDiabetesComplications_handler = require('../router_handler/TheCauseOfDiabetesComplications')

router.get('/getList', TheCauseOfDiabetesComplications_handler.getList)

module.exports = router