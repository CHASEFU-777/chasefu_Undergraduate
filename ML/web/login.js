function getList(username,password) {
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/api/login',
        data: {
            username: username,
            password: password,
        },
        success: function(res) {
            if(res.message == '登录成功！'){
                alert('登录成功！')
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
