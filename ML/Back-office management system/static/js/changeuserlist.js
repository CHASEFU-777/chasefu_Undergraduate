
function getuser() {
    var id = location.search.substring(1);
    $.ajax({
      
      method: 'GET',
      url: 'http://127.0.0.1:3007/api/userinfor/'+id,
    //   headers: {
    //     'Authorization': localStorage.getItem('itheima No1. ^_^')
    // },
      success: function (res) {
        console.log(res)
        // if (res.status !== 0) return alert('获取用户列表失败！')
        document.getElementById("id").value = res.data.id
        document.getElementById("username").value = res.data.username
        document.getElementById("nickname").value = res.data.nickname
        document.getElementById("date").value = res.data.date
        if (res.data.sex=='1'){document.getElementById("man").checked="false";document.getElementById("woman").checked="true"}
        document.getElementById("email").value = res.data.email
        document.getElementById("birth").value = res.data.birthday
        document.getElementById('area').value=res.data.province

      }
    })
  }
  
  getuser()

  
$('#btn_change_user').click(function(){
     var sex=$('#man').val()
   if(document.getElementById("man").checked=="true"){sex=0}else{sex=1}
    $.ajax({
        type:'post',
        url:'http://81.70.0.177:3007/my/users/updateuser',
        data:{id:$('#id').val(),username:$('#username').val(),nickname:$('#nickname').val(),email:$('#email').val(),sex:sex,birthday:$('#birth').val(),province:$('#area').val()},
        headers: {
            'Authorization': localStorage.getItem('itheima No1. ^_^')
        },
        success(res){
            console.log(res);
            getuser()
           
        }
       
    })
})
