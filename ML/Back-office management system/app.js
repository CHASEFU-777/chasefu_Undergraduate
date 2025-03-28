// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()

// 导入cors 中间件
const cors = require('cors')

//将cors注册为全局中间件
app.use(cors())

const db=require('./db/index')
// 
const { Router } = require('express')

    
  
app.get('/api/userinfo',(req, res) => {
    const sql ='select * from userinfo'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})

app.get('/api/ClinicalPicture',(req, res) => {
    const sql ='select * from clinicalpicture'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})
app.get('/api/TypesOfComplications',(req, res) => {
    const sql ='select * from typesofdc'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})
app.get('/api/Treatment',(req, res) => {
    const sql ='select * from treatment'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})
app.get('/api/TheCauseOfDiabetesComplications',(req, res) => {
    const sql ='select * from tcauseofdc'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})
app.get('/api/OverviewOfDiabetes',(req, res) => {
    const sql ='select * from overviewofdiabetes'
    db.query(sql,(err, results) => {
        if(err) res.send(err)
        res.send({
            data:results
        })
    })
})

app.post('/api/userinfor', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM userinfo`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM userinfo limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/tcauseofdc', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM tcauseofdc`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM tcauseofdc limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})


app.post('/api/clinicalpicture', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit =3 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM clinicalpicture`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM clinicalpicture limit ' + start + ',3'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/typesofdc', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM typesofdc`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM typesofdc limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/treatment', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM treatment`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM treatment limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/causeofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM causeofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM causeofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/clinicalpictureofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM clinicalpictureofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM clinicalpictureofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/checkofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM checkofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM checkofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/diagnosisofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM diagnosisofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM diagnosisofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/differentialdiagnosisofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM differentialdiagnosisofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM differentialdiagnosisofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

app.post('/api/treatmentofdiabetes', (req,res)=>{
    var page = ~~req.query.page || 1 //当前页
    var limit = 10 //每页显示的条数
    var start = (page - 1) * limit //每页第一条数据
    const sql = `SELECT count(*) as total FROM treatmentofdiabetes`
    db.query(sql, (err,results) => {
      if(err) res.cc(err)
  
      const count = results[0].total
  
      const sql = 'SELECT * FROM treatmentofdiabetes limit ' + start + ',10'
      db.query(sql, (err,results) => {
        if(err) res.cc(err)
  
        var pages = Math.ceil(count/limit) //总页数
        page=Math.min(page,pages) //当前页不能大于总页数
        page=Math.max(page,1) //当前页不能小于1
  
        res.send({
          status: 0,
          message: '获取高级管理员成功！',
          totalPages: pages,
          currentPage: page,
          data: results
        })
      })
    })
})

// 启动服务器
app.listen(8080, function() {
    console.log('api server running at http://127.0.0.1:8080')
  })
  