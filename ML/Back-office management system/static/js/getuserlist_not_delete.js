function getundeluserList() {
  var page = location.search.substring(1);
  var nowpage=""
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:8080/my/users/undelusers',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
    data:{
      page:page
    },
      success: function (res) {
        console.log(res)
        if (res.status !== 0) return alert('获取用户列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
          totalpage=res.totalPages
          totalpage1=totalpage-1
          totalpage2=totalpage-2
          totalpage3=totalpage-3
          nowpage=res.currentPage 
          if(item.sex=='0'){item.sex='男'}
          else{item.sex='女'}
          
          if(item.is_delete=='1'){item.is_delete="被删除";}else{item.is_delete="正常使用";}
          var str = '<tr><td align="center"><input type="checkbox" id="'+item.id+'"></td><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.nickname+'</td><td align="center">'+item.date+'</td><td align="center">'+item.sex+'</td><td align="center">'+item.email+'</td><td align="center">'+item.birthday+'</td><td align="center">'+item.province+'</td><td align="center">'+item.is_delete+'</td></tr>'
        
          rows.push(str)
        })
        $('#tb1').empty().append(rows.join(''))
        for(page=1;page<=totalpage;page++) {
          document.getElementById("select-page").options.add(new Option(page))}
          if(totalpage<="7"||nowpage >= totalpage2){
            var a = document.getElementById('page2');
    
            a.style.display = 'none';
           }
           if(totalpage<="6"||nowpage=="2"||nowpage=="3"){
            var b = document.getElementById('page1');
    
            b.style.display = 'none';
           }
           if(nowpage=="1" ){var c = document.getElementById('pageM');
    
           c.style.display = 'none';}
           if(totalpage<="2"){var d = document.getElementById('pageL');
  
         d.style.display = 'none';
  
         }
         if(totalpage=="1"){var e = document.getElementById('p2');
  
         e.style.display = 'none'}
           if(nowpage <= "2"){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            if(nowpage == totalpage){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
           }
           if(nowpage == totalpage1){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>'}
           if(nowpage == totalpage2){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>'}
           if(nowpage>="3" && nowpage <= totalpage3){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            document.getElementById("pageL").innerHTML='<li><a href="user-operate.html?'+totalpage+'">'+totalpage+'</a></li>'
            $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
              window.location.href="user-operate.html?"+(nowpage-1)}
            })
            $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
              window.location.href="user-operate.html?"+(nowpage+1)}
            })
            $('#go').click(function(){var gopage=$('#select-page').val();
            window.location.href="user-operate.html.html?"+gopage})
            
            document.getElementById("text-page").innerHTML='共'+totalpage+'页,当前在'+nowpage+'页，选择页码点击GO跳转'
      }
    })
  }
  
  getundeluserList()

  $('#btn_check').click(function(){
    function getonlymanagerList() {
    $.ajax({
        
      method: 'POST',
      url: 'http://81.70.0.177:8080/my/users/searchuser',
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
        var str = '<tr><td align="center"><input type="checkbox"></td><td align="center">'+item.id+'</td><td align="center">'+item.username+'</td><td align="center">'+item.nickname+'</td><td align="center">'+item.date+'</td><td align="center">'+item.sex+'</td><td align="center">'+item.email+'</td><td align="center">'+item.birthday+'</td><td align="center">'+item.province+'</td><td align="center">'+item.is_delete+'</td></td></tr>'
        rows.push(str)
      })
      $('#tb').empty().append(rows.join(''))
    }}})
  }
  
  getonlymanagerList()
  document.getElementById("check").value=""
  
  })

  function getdeluserList() {
    var nowpage=""
    var page = location.search.substring(1);
    if(location.search.substring(1)=='')(page=1)
    console.log(page)
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:8080/my/users/delusers',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
    data:{
      page:page
    },
      success: function (res) {
        console.log(res)
        if (res.status !== 0) return alert('获取用户列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
          totalpage=res.totalPages
          totalpage1=totalpage-1
          totalpage2=totalpage-2
          totalpage3=totalpage-3
          nowpage=res.currentPage 
          
          if(item.sex=='0'){item.sex='男'}
          else{item.sex='女'}
          
          if(item.is_delete=='1'){item.is_delete="被删除";}else{item.is_delete="正常使用";}
          var str = '<tr><td align="center"><input type="checkbox" id="'+item.id+'"></td><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.nickname+'</td><td align="center">'+item.date+'</td><td align="center">'+item.sex+'</td><td align="center">'+item.email+'</td><td align="center">'+item.birthday+'</td><td align="center">'+item.province+'</td><td align="center">'+item.is_delete+'</td></tr>'
        
          rows.push(str)
        })
        $('#tb2').empty().append(rows.join(''))
        for(page=1;page<=totalpage;page++) {
          document.getElementById("select-page").options.add(new Option(page))}
          if(totalpage<="7"||nowpage >= totalpage2){
            var a = document.getElementById('page2');
    
            a.style.display = 'none';
           }
           if(totalpage<="6"||nowpage=="2"||nowpage=="3"){
            var b = document.getElementById('page1');
    
            b.style.display = 'none';
           }
           if(nowpage=="1" ){var c = document.getElementById('pageM');
    
           c.style.display = 'none';}
           if(totalpage<="2"){var d = document.getElementById('pageL');
  
         d.style.display = 'none';
  
         }
         if(totalpage=="1"){var e = document.getElementById('p2');
  
         e.style.display = 'none'}
           if(nowpage <= "2"){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            if(nowpage == totalpage){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
           }
           if(nowpage == totalpage1){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>'}
           if(nowpage == totalpage2){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>'}
           if(nowpage>="3" && nowpage <= totalpage3){document.getElementById("pageM").innerHTML='<li><a href="user-operate.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="user-operate.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            document.getElementById("pageL").innerHTML='<li><a href="user-operate.html?'+totalpage+'">'+totalpage+'</a></li>'
            $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
              window.location.href="user-operate.html?"+(nowpage-1)+'#'}
            })
            $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
              window.location.href="user-operate.html?"+(nowpage+1)}
            })
            $('#go').click(function(){var gopage=$('#select-page').val();
            window.location.href="user-operate.html.html?"+gopage})
            
            document.getElementById("text-page").innerHTML='共'+totalpage+'页,当前在'+nowpage+'页，选择页码点击GO跳转'
      }
    })
  }
  
  getdeluserList()


  $('#reuse').click(function(){
    var a = document.getElementById('group-delete');

   a.style.display = 'none';

   var b = document.getElementById('group-reuse');
    
  b.style.display = 'block';
  var c = document.getElementById('li-delete');

  c.style.display = 'none';

  var d = document.getElementById('li-reuse');

 d.style.display = 'block';

 getdeluserList();

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

getundeluserList();

document.getElementById("alldel").checked="";
   } )

  
  
   $('#alldel').click(function(){
    
        if(document.getElementById("alldel").checked==true) {
           
           
            $.ajax({
              
              method: 'GET',
              url: 'http://81.70.0.177:8080/my/users/undelusers',
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
            url: 'http://81.70.0.177:8080/my/users/undelusers',
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
       console.log("全选")
       
        $.ajax({
          
          method: 'GET',
          url: 'http://81.70.0.177:8080/my/users/delusers',
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
        url: 'http://81.70.0.177:8080/my/users/delusers',
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
        url: 'http://81.70.0.177:8080/my/users/undelusers',
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
            url:'http://81.70.0.177:8080/my/users/deleteusers',
           
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
            
            getundeluserList()
          
        } 
        })
  
  
       }}
      })

   })

   $('#btn_reuse').click(function(){
    
    $.ajax({
              
        method: 'GET',
        url: 'http://81.70.0.177:8080/my/users/delusers',
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
        
      
     if(confirm( '是否确认恢复选中账号')){
        $.ajax({
            method:'POST',
            url:'http://81.70.0.177:8080/my/users/recoverusers',
           
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
            
            getdeluserList()
          
        } 
        })
  
  
       }}
      })

   })