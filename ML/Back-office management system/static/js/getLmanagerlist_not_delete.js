function getundelmanagerList() {
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:3007/my/managerinfoLow',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
      success: function (res) {
        console.log(res)
        if (res.status !== 0) return alert('获取用户列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
            if(item.grade=='3'){item.grade='低级管理员'}
            else if(item.grade=='2'){item.grade='中级管理员'}
            else{item.grade='高级管理员'}
              if(item.is_delete == '0'){
                  item.is_delete = '已启用'
              }else{
                  item.is_delete = '已禁用'
              }
          
         
          var str = '<tr><td align="center"><input type="checkbox" id="'+(i+1+(nowpage-1)*10)+'"></td><td align="center">'+item.id+'</td><td align="center">'+item.username+'</td><td align="center">'+item.date+'</td><td align="center">'+item.grade+'</td><td align="center">'+item.is_delete+'</td></tr>'
        
          rows.push(str)
        })
        $('#tb1').empty().append(rows.join(''))
      }
    })
  }
  
  getundelmanagerList()

  $('#btn_check').click(function(){
    function getonlymanagerList() {
    $.ajax({
        
      method: 'POST',
      url: 'http://81.70.0.177:3007/my/users/searchuser',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
    data:{information: document.getElementById("check").value},
    success: function (res) {
      console.log(res)
      if(res.data==""){$('#tb').empty().append();$("#alert").html("抱歉，未搜索到您想要的账号，请重试！")}else{
        $('#tb').empty().append();$("#alert").html("")
      if (res.status !== 0) return alert('获取用户列表失败！')
      var rows = []
      $.each(res.data, function (i, item) {
        if(item.sex=='0'){item.sex='男'}
        else{item.sex='女'}
        var a='删除'
        if(item.is_delete=='1'){item.is_delete="被删除";a='恢复'}else{item.is_delete="正常使用";a='删除'}
        var str = '<tr><td align="center"><input type="checkbox"></td><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.nickname+'</td><td align="center">'+item.date+'</td><td align="center">'+item.sex+'</td><td align="center">'+item.email+'</td><td align="center">'+item.birthday+'</td><td align="center">'+item.province+'</td><td align="center">'+item.is_delete+'</td></td></tr>'
        rows.push(str)
      })
      $('#tb').empty().append(rows.join(''))
    }}})
  }
  
  getonlymanagerList()
  document.getElementById("check").value=""
  
  })

  function getdelmanagerList() {
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:3007/my/delmanager',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
      success: function (res) {
        console.log(res)
        if (res.status !== 0) return alert('获取用户列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
          if(item.grade=='3'){item.grade='低级管理员'}
          else if(item.grade=='2'){item.grade='中级管理员'}
          else{item.grade='高级管理员'}
              if(item.is_delete == '0'){
                  item.is_delete = '已启用'
              }else{
                  item.is_delete = '已禁用'
              }
          
          
          
          var str = '<tr><td align="center"><input type="checkbox" id="'+(i+1+(nowpage-1)*10)+'" ></td><td align="center">'+item.id+'</td><td align="center">'+item.username+'</td><td align="center">'+item.date+'</td><td align="center">'+item.grade+'</td><td align="center">'+item.is_delete+'</td></tr>'
         
          rows.push(str)
        })
        $('#tb2').empty().append(rows.join(''))
      }
    })
  }
  
  getdelmanagerList()


  $('#reuse').click(function(){
    var a = document.getElementById('group-delete');

   a.style.display = 'none';

   var b = document.getElementById('group-reuse');

  b.style.display = 'block';
  var c = document.getElementById('li-delete');

  c.style.display = 'none';

  var d = document.getElementById('li-reuse');

 d.style.display = 'block';

 getdelmanagerList();

 document.getElementById("allreuse").checked=""
   } )
   $('#delete1').click(function(){
    var a = document.getElementById('group-delete');

   a.style.display = 'block';

   var d = document.getElementById('group-reuse');

   d.style.display = 'none';
   var c = document.getElementById('li-delete');

   c.style.display = 'block';

   var d = document.getElementById('li-reuse');

  d.style.display = 'none';

getundelmanagerList();

document.getElementById("alldel").checked="";
   } )

  
  
   $('#alldel').click(function(){
    
        if(document.getElementById("alldel").checked==true) {
           
           
            $.ajax({
              
              method: 'GET',
              url: 'http://81.70.0.177:3007/my/managerinfoLow',
              headers: {
                'Authorization': localStorage.getItem('itheima No1. ^_^')
            },
              success: function (res) {
                console.log(res)
                
                $.each(res.data, function (i, item) {
                    
                
           document.getElementById(item.id).checked="true"
                })
               
              }
            })
          
          
           
        }
        else{
        $.ajax({
              
            method: 'GET',
            url: 'http://81.70.0.177:3007/my/managerinfoLow',
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
            success: function (res) {
              console.log(res)
              
              $.each(res.data, function (i, item) {
                  
             
         document.getElementById(item.id).checked=""
              })
             
            }
          })
      
    }

   })

   $('#allreuse').click(function(){
    
    if(document.getElementById("allreuse").checked==true) {
       
       
        $.ajax({
          
          method: 'GET',
          url: 'http://81.70.0.177:3007/my/delmanager',
          headers: {
            'Authorization': localStorage.getItem('itheima No1. ^_^')
        },
          success: function (res) {
            console.log(res)
            
            $.each(res.data, function (i, item) {
                
            
       document.getElementById(item.id).checked="true"
            })
           
          }
        })
      
      
       
    }
    else{
    $.ajax({
          
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/delmanager',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
          
          $.each(res.data, function (i, item) {
              
         
     document.getElementById(item.id).checked=""
          })
         
        }
      })
  
}

})
   $('#btn_delete').click(function(){
    
    $.ajax({
              
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/undelmanager',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
          var total=0
          var arr=""
          $.each(res.data, function (i,item) {
              
                    if( document.getElementById(item.id).checked==true){
                        
                        total=total+1;
                        arr=arr+item.id+','

                    }
              
          
          
          })
           arr=arr.substring(0,arr.length-1)
           total=String(total)
          console.log(arr,total)
          console.log(typeof arr,typeof total)
        
      
     if(confirm( '是否确认删除选中账号')){
        $.ajax({
            method:'POST',
            url:'http://81.70.0.177:3007/my/delectmanager',
           
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
           data:{
              arr,
              total,
           },
         
            success:function(res){  
               console.log(typeof arr,typeof total) 
           console.log(arr,total)
            
              console.log(res)
            if (res.status !== 0) return alert('删除账号失败！')
            
            getundelmanagerList()
          
        } 
        })
  
  
       }}
      })

   })

   $('#btn_reuse').click(function(){
    
    $.ajax({
              
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/delmanager',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
          var total=0
          var arr=""
          $.each(res.data, function (i,item) {
              
                    if( document.getElementById(item.id).checked==true){
                        
                        total=total+1;
                        arr=arr+item.id+','

                    }
              
          
          
          })
           arr=arr.substring(0,arr.length-1)
           total=String(total)
          console.log(arr,total)
          console.log(typeof arr,typeof total)
        
      
     if(confirm( '是否确认删除选中账号')){
        $.ajax({
            method:'POST',
            url:'http://81.70.0.177:3007/my/recovermanager',
           
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
           data:{
              arr,
              total,
           },
         
            success:function(res){  
               console.log(typeof arr,typeof total) 
           console.log(arr,total)
            
              console.log(res)
            if (res.status !== 0) return alert('删除账号失败！')
            
            getdelmanagerList()
          
        } 
        })
  
  
       }}
      })

   })