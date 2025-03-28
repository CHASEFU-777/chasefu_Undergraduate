var token = ""
token=localStorage.getItem('token')
// token=JSON.parse(localStorage.getItem('token')) 
// alert(token)
function Gettoken() {
    var login=document.getElementById("M")
    if(token!=""){
        login.innerHTML='<a href="../user/usercenter.html"><img src="../img/user.png" width="40px" style="margin-bottom:15px"></a><a onclick="myFunction()">退出登录</a>'
    }
}
Gettoken()
function myFunction(){
    con=confirm( "你确定退出登陆吗?" ); //在页面上弹出对话框
     if (con== true ) {
        localStorage.setItem('token','')
        window.location.href="index.html";
     }
}