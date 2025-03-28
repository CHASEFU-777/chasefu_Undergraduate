
$('#btn_login').click(function(){
    $.ajax({
        type:'post',
        url:'http://81.70.0.177:3007/api/login_manager_top',
        data:{username:$('#username').val(),password:$('#password').val(),grade:$("input[type='radio']:checked").val()},
        success(res){
            console.log(res);
              localStorage.setItem('itheima No1. ^_^', res.token);
        var username =$('#username').val()
         localStorage.setItem("username", username);
         var grade = $("input[type='radio']:checked").val()
         localStorage.setItem("grade", grade);  
       
       if(res.token){if(grade=="3"){window.location.href="index.html"}else{window.location.href="index.html"}}
       if(res.status=='1'){alert('账号或密码错误，请重试！')}
        }
       
    })
})