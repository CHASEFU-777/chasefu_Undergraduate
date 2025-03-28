
function getuserList() {
    // alert(localStorage.getItem('itheima No1. ^_^'))
      var page = location.search.substring(1);
        $.ajax({
          
          method: 'POST',
          url: `http://127.0.0.1:3007/api/clinicalpictureofdiabetes?page=${page}`,
        //   headers: {
        //     'Authorization': localStorage.getItem('itheima No1. ^_^')
        // },
        // data:{
        //   page:page
        // },
          success: function (res) {
            console.log(res)
            // if (res.status !== 0) return alert('获取用户列表失败！')
            var rows = []
            $.each(res.data, function (i, item) {
              totalpage=res.totalPages
              totalpage1=totalpage-1
              totalpage2=totalpage-2
              totalpage3=totalpage-3
              nowpage=res.currentPage
              if(item.sex=='0'){item.sex='男'}
              else{item.sex='女'}
              var a='删除'
              if(item.is_delete=='1'){item.is_delete="被删除";a='恢复'}else{item.is_delete="正常使用";a='删除'}
              var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.Manifestations+'</td><td align="center">'+item.Instructions+'</td><td align="center"><a href="change-users.html?'+item.id+'" class="change" data-id="'+item.id+'">修改</a>&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="del" data-id="'+item.id+'">'+a+'</a></td></tr>'
              rows.push(str)
            })
            
            for(page=1;page<=totalpage;page++) {
              document.getElementById("select-page").options.add(new Option(page))}
            $('#tb').empty().append(rows.join(''))
            
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
           var f = document.getElementById('pageM');
      
           f.style.display = 'none';
      
           }
           if(totalpage=="1"){var e = document.getElementById('p2');
      
           e.style.display = 'none'}
           if(nowpage == "2"){document.getElementById("pageM").innerHTML='<li><a href="check-users.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-users.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            if(nowpage == totalpage){document.getElementById("pageM").innerHTML='<li><a href="check-users.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
           }
           if(nowpage == totalpage1){document.getElementById("pageM").innerHTML='<li><a href="check-users.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-users.html?'+nowpage+'">'+nowpage+'</a></li>'}
           if(nowpage == totalpage2){document.getElementById("pageM").innerHTML='<li><a href="check-users.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-users.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>'}
           if(nowpage>="3" && nowpage <= totalpage3){document.getElementById("pageM").innerHTML='<li><a href="check-users.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-users.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-users.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            document.getElementById("pageL").innerHTML='<li><a href="check-users.html?'+totalpage+'">'+totalpage+'</a></li>'
            $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
              window.location.href="check-users.html?"+(nowpage-1)}
            })
            $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
              window.location.href="check-users.html?"+(nowpage+1)}
            })
            $('#go').click(function(){var gopage=$('#select-page').val();
            window.location.href="check-users.html?"+gopage})
            
            document.getElementById("text-page").innerHTML='共'+totalpage+'页,当前在'+nowpage+'页，选择页码点击GO跳转'
          }
        })
      }
      
      getuserList()
    
     
    $('tbody').on('click', '.del', function () {
      if(confirm( '是否确认删除/恢复此账号')){
      var id= $(this).attr('data-id')
      $.ajax({
        method:'GET',
        url:'http://81.70.0.177:3007/my/users/deleteuser/'+id,
       
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
       
        success:function(res){  
      
          console.log(res)
        if (res.status !== 0) return alert('删除账号失败！')
        getuserList()
      
    } 
    })}})
      
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
          var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.nickname+'</td><td align="center">'+item.date+'</td><td align="center">'+item.sex+'</td><td align="center">'+item.email+'</td><td align="center">'+item.birthday+'</td><td align="center">'+item.province+'</td><td align="center">'+item.is_delete+'</td><td align="center"><a href="change-users.html?'+item.id+'" class="change" data-id="'+item.id+'">修改</a>&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="del" data-id="'+item.id+'">'+a+'</a></td></tr>'
          rows.push(str)
        })
        $('#tb').empty().append(rows.join(''))
      }}})
    }
    
    getonlymanagerList()
    document.getElementById("check").value=""
    
    })