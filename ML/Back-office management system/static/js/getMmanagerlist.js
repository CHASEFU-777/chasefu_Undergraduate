function getMmanagerList() {
      var page = location.search.substring(1);
     
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:3007/my/managerinfoMiddle',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
      data:{
        page:page,
      },
      success: function (res) {
        console.log(res)
        if (res.status !== 0) return alert('获取管理员列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
          totalpage=res.totalPages
          totalpage1=totalpage-1
          totalpage2=totalpage-2
          totalpage3=totalpage-3
          nowpage=res.currentPage
          if(item.grade=='3'){item.grade='低级管理员'}
          else if(item.grade=='2'){item.grade='中级管理员'}
          else{item.grade='高级管理员'}
            if(item.is_delete == '0'){
                item.is_delete = '已启用'
            }else{
                item.is_delete = '已禁用'
            }
            var a='启用'
            if(item.is_delete== '已禁用'){a='启用'}else{a='禁用'}
            var b=""
            if (item.grade=='高级管理员'){b='disabled'}
            var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.date+'</td><td align="center">中级管理员</td><td align="center">'+item.is_delete+'</td><td><button type="button" onclick="change('+item.id+')" id="btn_change" name="btn_change" class="btn btn-primary"  style="margin-left: 40px;" '+b+' >'+a+'</button></td></tr>'
            

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

       }
       if(totalpage=="1"){var e = document.getElementById('p2');

       e.style.display = 'none';}
       if(nowpage == "2"){document.getElementById("pageM").innerHTML='<li><a href="check-Mmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
        document.getElementById("pageM").innerHTML+='<li><a href="check-Mmanagers.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
        if(nowpage == totalpage){document.getElementById("pageM").innerHTML='<li><a href="check-Mmanagers.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
       }
       if(nowpage == totalpage1){document.getElementById("pageM").innerHTML='<li><a href="check-Mmanagers.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
        document.getElementById("pageM").innerHTML+='<li><a href="check-Mmanagers.html?'+nowpage+'">'+nowpage+'</a></li>'}
       if(nowpage == totalpage2){document.getElementById("pageM").innerHTML='<li><a href="check-Mmanagers.html?'+nowpage+'">'+nowpage+'</a></li>';
        document.getElementById("pageM").innerHTML+='<li><a href="check-Mmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>'}
       if(nowpage>="3" && nowpage <= totalpage3){document.getElementById("pageM").innerHTML='<li><a href="check-Mmanagers.html?'+nowpage+'">'+nowpage+'</a></li>';
        document.getElementById("pageM").innerHTML+='<li><a href="check-Mmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
        document.getElementById("pageM").innerHTML+='<li><a href="check-Mmanagers.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
        document.getElementById("pageL").innerHTML='<li><a href="check-Mmanagers.html?'+totalpage+'">'+totalpage+'</a></li>'
        $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
          window.location.href="check-Mmanagers.html?"+(nowpage-1)}
        })
        $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
          window.location.href="check-Mmanagers.html?"+(nowpage+1)}
        })
        $('#go').click(function(){var gopage=$('#select-page').val();
        window.location.href="check-Lmanagers.html?"+gopage})
        
        document.getElementById("text-page").innerHTML='共'+totalpage+'页,当前在'+nowpage+'页，选择页码点击GO跳转'
      }
    })
     
  }
  
  getMmanagerList()
 
 function change(id) {
    if(localStorage.getItem("grade") =='2'||localStorage.getItem("grade") =='3'){alert('抱歉，您权限不足！')}else{
    if(confirm( '是否确认启用/禁用此管理员账号')){
   
    $.ajax({
      method:'GET',
      url:'http://81.70.0.177:3007/my/delectmanager/'+id,
     
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
     
      success:function(res){  
    
        console.log(res)
      if (res.status !== 0) { alert('操作失败！')}else{alert('操作成功！')}
      getMmanagerList()
    
  } 
  })}}}
  $('#btn_new').click(function(){
    if(localStorage.getItem("grade") =='3'||localStorage.getItem("grade") =='2'){alert('抱歉，您权限不足！');window.location.href="check-Mmanagers.html"}else{
    $.ajax({
        type:'GET',
        url:'http://81.70.0.177:3007/my/reguser_manager_low',
        
        headers: {
            'Authorization': localStorage.getItem('itheima No1. ^_^')
        },
        
        success(res){
            console.log(res);
        
            document.getElementById("nusername").value ='Middle_manager'+res.message
           
       
        }
       
    })
  }
})
$('#btn_qr').click(function(){
  
  $.ajax({
      type:'POST',
      url:'http://81.70.0.177:3007/api/reguser_manager_top',
      
      headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
      data:{
        username:$('#nusername').val(),
        password:$('#npassword').val(),
        grade:"2"
      },
      success(res){
          console.log(res);
          if(res.message=='用户名被占用，请更换其他用户名！'){alert('该账号被占用，请重新生成账号！')}
          if(res.message=='注册成功！'){alert('生成管理员账号成功！')}
          
         
      getMmanagerList()
      }
     
  })
}
)
     
$('#btn_check').click(function(){
  function getonlymanagerList() {
  $.ajax({
      
    method: 'POST',
    url: 'http://81.70.0.177:3007/my/search_manager_Middle',
    headers: {
      'Authorization': localStorage.getItem('itheima No1. ^_^')
  },
  data:{username: document.getElementById("check").value},
    success: function (res) {
      console.log(res)
      if(res.data==""){$('#tb').empty().append();$("#alert").html("抱歉，未搜索到您想要的账号，请重试！")}else{
        $('#tb').empty().append();$("#alert").html("")
      if (res.status !== 0) return alert('获取管理员列表失败！')
      var rows = []
      $.each(res.data, function (i, item) {
        if(item.is_top=='0'){item.is_top='低级管理员'}
        else{item.is_top='高级管理员'}
          if(item.is_delete == '0'){
              item.is_delete = '已启用'
          }else{
              item.is_delete = '已禁用'
          }
          var a='启用'
          if(item.is_delete== '已禁用'){a='启用'}else{a='禁用'}
          var b=""
          if (item.is_top=='高级管理员'){b='disabled'}
          var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.username+'</td><td align="center">'+item.date+'</td><td align="center">中级管理员</td><td align="center">'+item.is_delete+'</td><td><button type="button" onclick="change('+item.id+')" id="btn_change" name="btn_change" class="btn btn-primary"  style="margin-left: 40px;" '+b+' >'+a+'</button></td></tr>'
          

          rows.push(str)
      })
      $('#tb').empty().append(rows.join(''))
      document.getElementById("count").innerHTML='搜索成功 ! 共搜索到'+res.count+'条'
    }
  }})
}

getonlymanagerList()
document.getElementById("check").value=""

})