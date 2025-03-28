function getsubjectList() {
    var page= location.search.substring(1);
    if(page=="1"){
      $.ajax({
        method: 'GET',
        url: 'http://81.70.0.177:3007/api/question/getquestionDaily',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },

        success: function (res) {
          console.log(res)
      
          if (res.status !== 0) return alert('获取列表失败！')
          var rows = []
          $.each(res.data, function (i, item) {
           
        var a="正常"
          //   if(item.is_delete == 0){
          //     a = '正常'
          // }else{
          //     a = '已删除'
          // } 
          var b=""
          if(res.type=="1"){
            b="判断题"
          }else if(res.type=="2"){
            b="单选题"
          }else{
            b="多选题"
          }
          console.log(a)
            var str = '<tr><td align="center">'+(i+1)+'</td><td align="center"  style="text-overflow: ellipsis; -moz-text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">'+item.title+'</td><td align="center">'+b+'</td><td align="center">'+item.difficulty+'</td><td align="center">'+a+'</td><td><button type="button" class="btn btn-primary"  style="margin-left: 25%;"  ><a href="subjetdetail.html?'+item.id+'" style="text-decoration: none;color: #FFFFFF;">详情</a></button></td></td></tr>'
          
            rows.push(str)
          })
            $('#tb').empty().append(rows.join(''))
            
     
        }
      })
    }else if(page=="7"){
        $.ajax({
            method: 'GET',
            url: 'http://81.70.0.177:3007/api/question/getMatch',
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
    
            success: function (res) {
              console.log(res)
          
              if (res.status !== 0) return alert('获取列表失败！')
              var rows = []
              $.each(res.data, function (i, item) {
               
            var a="正常"
              //   if(item.is_delete == 1){
              //     a = '已删除'
              // }else{
              //     a = '正常'
              // } 
              var b=""
              if(res.type=="1"){
                b="判断题"
              }else if(res.type=="2"){
                b="单选题"
              }else{
                b="多选题"
              }
              console.log(a)
                var str = '<tr><td align="center">'+(i+1)+'</td><td align="center"  style="text-overflow: ellipsis; -moz-text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">'+item.title+'</td><td align="center">'+b+'</td><td align="center">'+item.difficulty+'</td><td align="center">'+a+'</td><td><button type="button" class="btn btn-primary"  style="margin-left: 25%;"  ><a href="subjetdetail.html?'+item.id+'" style="text-decoration: none;color: #FFFFFF;">详情</a></button></td></td></tr>'
              
                rows.push(str)
              })
                $('#tb').empty().append(rows.join(''))
                
         
            }
          })
    }else{
        var classify=""
        if(page=="2"){classify='冒充公检法类'
    }else if(page=="3"){classify='刷单返利类诈骗'
}else if(page=="4"){classify='虚假投资理财诈骗'
}else if(page=="5"){classify='虚假网络贷款诈骗'
}else if(page=="6"){classify='冒充电商物流客服诈骗'}
        $.ajax({
            method: 'GET',
            url: 'http://81.70.0.177:3007/api/question/getquestionByCate',
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
          data:{eas_classify:classify},
            success: function (res) {
              console.log(res)
          
              if (res.status !== 0) return alert('获取列表失败！')
              var rows = []
              $.each(res.data, function (i, item) {
               
            var a="正常"
              //   if(item.is_delete == 0){
              //     a = '正常'
              // }else{
              //     a = '已删除'
              // } 
              var b=""
              if(res.type=="1"){
                b="判断题"
              }else if(res.type=="2"){
                b="单选题"
              }else{
                b="多选题"
              }
              console.log(a)
                var str = '<tr><td align="center">'+(i+1)+'</td><td align="center"  style="text-overflow: ellipsis; -moz-text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">'+item.title+'</td><td align="center">'+b+'</td><td align="center">'+item.difficulty+'</td><td align="center">'+a+'</td><td><button type="button" class="btn btn-primary"  style="margin-left: 25%;"  ><a href="subjetdetail.html?'+item.id+'" style="text-decoration: none;color: #FFFFFF;">详情</a></button></td></td></tr>'
              
                rows.push(str)
              })
                $('#tb').empty().append(rows.join(''))
                
         
            }
          })
    }
    }
    
    getsubjectList()
  