function login() {

  //生成背景div和登录框div并添加到body中
      var swidth = window.screen.width;
      var sheight = window.screen.height;
      var bg = document.createElement("div");
      bg.id = "bg";
      bg.style.width = swidth + "px";
      bg.style.height = sheight + "px";
      document.body.appendChild(bg);
      var login = document.createElement("div");
      login.id = "login"
  //这里下边一条用于设置登陆框中的内容,不重要
      login.innerHTML="<button onclick='close()' id='close'>X</button><form method='get'><table></tr><tr><td colspan='2'><h2>登录</h2></td></tr><tr><td class='lable'><label for='userName'></label>用户名:</td><td><input id='username' class='in' autofocus='autofocus' autocomplete=\"on\" type='text' placeholder='请输入用户名'></td></tr><tr><td class='lable'>密码:</td><td><input class='in' type='password' id='password' name='password' placeholder='请输入密码'></td></tr><tr><td><input type='radio' name='visiter' value='1'>管理员</td><td><input type='radio' name='visiter' value='0'>用户</td></tr><tr><td colspan='2'><div class='rem_pass' ><label><input id='chioce' type='checkbox' name='rem' value='sadasd'>记住密码</label></div><input type='button' id='button' value='登录'></td></table></form>"
      document.body.appendChild(login);
      //不重要:设置关闭按钮和点击背景触发关闭事件
      var close = document.getElementById("close");
      close.onclick = bg.onclick = function () {
          document.body.removeChild(bg);
          document.body.removeChild(login);
      }
      var btn = document.getElementById('button')
      btn.onclick = function() {
          var username = document.getElementById('username').value
          var password = document.getElementById('password').value
          getList(username,password)  
          

      }
};


function reguser() {

    //生成背景div和注册框div并添加到body中
        var swidth = window.screen.width;
        var sheight = window.screen.height;
        var bg = document.createElement("div");
        bg.id = "bg";
        bg.style.width = swidth + "px";
        bg.style.height = sheight + "px";
        document.body.appendChild(bg);
        var reguser = document.createElement("div");
        reguser.id = "reguser"
    //这里下边一条用于设置注册框中的内容,不重要
    reguser.innerHTML="<button onclick='close()' id='close'>X</button><form method='get'><table></tr><tr><td colspan='2'><h2>注册</h2></td></tr><tr><td class='lable'><label for='userName'></label>用户名:</td><td><input id='username' class='in' autofocus='autofocus' autocomplete=\"on\" type='text' placeholder='请输入用户名'></td></tr><tr><td class='lable'>密码:</td><td><input class='in' type='password' id='password' name='password' placeholder='请输入密码'></td></tr><tr><td class='lable'>昵称:</td><td><input class='in' type='nickname' id='nickname' name='nickname' placeholder='请输入昵称'></td></tr><tr><td colspan='2'><div class='rem_pass' ><label><input id='chioce' type='checkbox' name='rem' value='sadasd'>记住密码</label></div><input type='button' id='button' value='提交'></td></table></form>"
        document.body.appendChild(reguser);
        //不重要:设置关闭按钮和点击背景触发关闭事件
        var close = document.getElementById("close");
        close.onclick = bg.onclick = function () {
            document.body.removeChild(bg);
            document.body.removeChild(reguser);
        }
        var btn = document.getElementById('button')
        btn.onclick = function() {
            var username = document.getElementById('username').value
            var password = document.getElementById('password').value
            var nickname = document.getElementById('nickname').value
            getList1(username,password,nickname)
  
        }
  };


  window.onload = function(){
      var btn = document.getElementById("login");
      btn.onclick=function(){
          login();
          return false;
      }
  }


  window.onload = function(){
    var btn = document.getElementById("reguser");
    btn.onclick=function(){
        login();
        return false;
    }
}

  function getList(username,password) {
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:3007/api/login',
        data: {
            username: username,
            password: password,
        },
        success: function(res) {
            if(res.message == '登录成功！'){
                alert('登录成功！')
                var id=res.Id
                var show=$('input:radio:checked').val()
                $('#login').css('display','none')
                // var m = document.getElementById('M')
                if(show=='0'){
                    window.location.href="index.html?id="+id+""
                }
                if(show=='1'){
                    window.location.href="../../Back-office management system/index.html"
                }
                // m.innerHTML='<a href="./user/usercenter.html"><img src="img/user.png" width="40px" style="margin-bottom:15px"></a>'
                // location.reload()

            }else{
                alert('密码错误')
            }
        }
    })
}


function getList1(username,password,nickname) {
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:3007/api/reguser',
        data: {
            username: username,
            password: password,
            nickname: nickname,
        },
        success: function(res) {
            if(res.message == '注册成功！'){
                alert('注册成功！')
                location.href='index.html'
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
  
  var btn = document.getElementById('button')
        btn.onclick = function() {
            var username = document.getElementById('username').value
            var password = document.getElementById('password').value
            var nickname = document.getElementById('nickname').value
            getList1(username,password,nickname)
  
        }
        