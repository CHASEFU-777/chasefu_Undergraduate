function getsortList() {
  var page = location.search.substring(1);
    $.ajax({
      
      method: 'GET',
      url: 'http://81.70.0.177:3007/my/cate/cates',
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
    data:{page:page},
      success: function (res) {
        console.log(res)
        nowpage=res.currentPage
        totalpage=res.totalPages
        if (res.status !== 0) return alert('获取分类列表失败！')
        var rows = []
        $.each(res.data, function (i, item) {
          if(item.is_delete == '0'){
            item.is_delete = '正在使用'
        }else{
            item.is_delete = '未使用'
        } 
        var a='启用'
        if(item.is_delete== '未使用'){a='启用'}else{a='禁用'}
         if(item.alias==null){item.alias = '无';}
          var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.casename+'</td><td align="center">'+item.alias+'</td><td align="center">'+item.is_delete+'</td><td><button type="button" onclick="change('+item.id+')" id="btn_change" name="btn_change" class="btn btn-primary"  style="margin-left: 30px;" >'+a+'</button><td><button type="button" onclick="go('+item.id+')" class="btn btn-primary"  style="margin-left: 10px;color: #FFFFFF;"  >案例详情-></button></td></td></tr>'
        
          rows.push(str)
        })
       
        $('#tb').empty().append(rows.join(''))
        $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
          window.location.href="check-cases.html?"+(nowpage-1)}
        })
        $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
          window.location.href="check-cases.html?"+(nowpage+1)}})
      }
    })
  }
  
  getsortList()

  function change(id) {
 
    if(confirm( '是否确认启用/禁用此分类')){
   
    $.ajax({
      method:'GET',
      url:'http://81.70.0.177:3007/my/cate/deletecate/'+id,
     
      headers: {
        'Authorization': localStorage.getItem('itheima No1. ^_^')
    },
     
      success:function(res){  
    
        console.log(res)
      if (res.status !== 0) { alert('操作失败！')}else{alert('操作成功！')}
      getsortList()
    
  } 
  })}}

  function go(id) {
    localStorage.setItem("caseid", id);
    window.location.href="case.html?1";
  
  }
  $('#btn_qrnew').click(function(){
   
    $.ajax({
        type:'POST',
        url:'http://81.70.0.177:3007/my/cate/addcates',
        
        headers: {
            'Authorization': localStorage.getItem('itheima No1. ^_^')
        },
        data:{casename: $('#casename').val()

        },
        success(res){
            console.log(res);
        
            
           alert('新增类型成功！')
            getsortList()
        }
       
    })
  
})