
$('#btn_change_password').click(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8080/my/getmanagerInfo',
        // data:{oldPwd:$('#oldPwd').val(),newPwd:$('#newPwd').val()},
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlcm5hbWUiOiJhcF9IbWFuYWdlcjEiLCJwYXNzd29yZCI6IiIsIm1hbmFnZXJfcGljIjoiaHR0cHM6Ly9hbmNpZW50LXByZXNjcmlwdGlvbi0xMzEyOTIzNjI1LmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20vbWFuYWdlci9pbmR4LmpwZWciLCJyZWdEYXRlIjoiMjAyMi0xMC0wMlQwMjowMDowMC4wMDBaIiwic3RhdGUiOjAsImdyYWRlIjoxLCJpYXQiOjE2NjQ3OTMyMjMsImV4cCI6MTY2NDgyOTIyM30.JAD4D01CZ1es1njtjS-f4W7QcFAFGiiy5c-eRaJzVj4'
        },
        success(res){
            console.log(res);
            
        }
       
    })
})

function getlimitelist() {
        if(localStorage.getItem('grade')=="2"){document.getElementById("is_h").value==false}
        if(localStorage.getItem('grade')=="3"){document.getElementById("is_l").value =true;document.getElementById("is_h").value =false;}
}