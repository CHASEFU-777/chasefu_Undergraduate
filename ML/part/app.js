// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()
const joi = require('@hapi/joi')

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // status 默认值为 1，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 一定要在路由之前配置解析 Token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }))

// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
// 导入并使用临床表现的路由模块
const ClinicalPictureRouter = require('./router/ClinicalPicture')
app.use('/api/ClinicalPicture', ClinicalPictureRouter)
// 导入并使用病因的路由模块
const TheCauseOfDiabetesComplicationsRouter = require('./router/TheCauseOfDiabetesComplications')
app.use('/api/TheCauseOfDiabetesComplications', TheCauseOfDiabetesComplicationsRouter)
// 导入并使用治疗方法的路由模块
const TreatmentRouter = require('./router/Treatment')
app.use('/api/Treatment', TreatmentRouter)
// 导入并使用种类的路由模块
const TypesOfComplicationsRouter = require('./router/TypesOfComplications')
app.use('/api/TypesOfComplications', TypesOfComplicationsRouter)
// 导入并使用用户个人的路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/api/userinfo', userinfoRouter)

// 导入并使用糖尿病概述的路由模块
const OverviewOfDiabetesRouter = require('./router/OverviewOfDiabetes')
app.use('/api/OverviewOfDiabetes', OverviewOfDiabetesRouter)
// 导入并使用糖尿病病因的路由模块
const DIAcauseRouter = require('./router/DIAcause')
app.use('/api/DIAcause', DIAcauseRouter)
// 导入并使用糖尿病临床表现的路由模块
const DIApictureRouter = require('./router/DIApicture')
app.use('/api/DIApicture', DIApictureRouter)
// 导入并使用糖尿病检查的路由模块
const DIAcheckRouter = require('./router/DIAcheck')
app.use('/api/DIAcheck', DIAcheckRouter)
// 导入并使用糖尿病诊断的路由模块
const DIAdiagnoseRouter = require('./router/DIAdiagnose')
app.use('/api/DIAdiagnose', DIAdiagnoseRouter)
// 导入并使用糖尿病鉴别诊断的路由模块
const DIAidentifyRouter = require('./router/DIAidentify')
app.use('/api/DIAidentify', DIAidentifyRouter)
// 导入并使用糖尿病治疗的路由模块
const DIAtreatmentRouter = require('./router/DIAtreatment')
app.use('/api/DIAtreatment', DIAtreatmentRouter)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 身份认证失败后的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  // 未知的错误
  res.cc(err)
})

// 启动服务器
app.listen(3007, () => {
  console.log('api server running at http://127.0.0.1:3007')
})
