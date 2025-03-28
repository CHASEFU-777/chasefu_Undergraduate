function getList(username,password) {
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/api/reguser',
        data: {
            username: username,
            password: password,
        },
        success: function(res) {
            if(res.message == '注册成功！'){
                alert('注册成功！')
                location.href='login.html'
            }else{
                alert('注册失败！')
            }
        }
    })
}


var btn = document.getElementById('button')
btn.onclick = function() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    getList(username,password)
}
