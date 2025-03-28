//获取用户信息
const token=JSON.parse(localStorage.getItem('token')) 
var code = ""
var strs = []
function GetRequest() {
    var url = window.location.href;
    if(url.indexOf("?") != -1) {
        var str = url.substring(1)
        strs = str.split("=")
        code = strs[1];
    }
}

GetRequest()
function getList() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3007/api/userinfo/getList',
        success: function(res) {
            console.log(res.data)
            var rows = []
            var usertitle=[]
            var Follow=[]
            var Follows=[]
            var Likes=[]
            var Photo=[]
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var infor = '<tr><td>'+item.nickname +'</td></tr><tr><td style="line-height:50px;">'+ item.motto+'</td></tr><tr><td><button type="button">编辑</button></td></tr>'
                }
                usertitle.push(infor)
            })
            $('#tn').empty().append(usertitle.join(''))
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var f = '<tr><td>'+item.following +'</td><tr><td>关注</td></tr></tr>'
                }
                Follow.push(f)
            })
            $('#tf').empty().append(Follow.join(''))
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var ph = '<tr><td>'+item.photo +'</td></tr>'
                }
                Photo.push(ph)
            })
            $('#tp').empty().append(Photo.join(''))
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var fo = '<tr><td>'+item.followers +'</td><tr><td>粉丝</td></tr></tr>'
                }
                Follows.push(fo)
            })
            $('#tfo').empty().append(Follows.join(''))
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var l = '<tr><td>'+item.likes +'</td><tr><td>获赞</td></tr></tr>'
                }
                Likes.push(l)
            })
            $('#tl').empty().append(Likes.join(''))
            $.each(res.data, (i,item) => {
                if(item.Id==code){
                    var str = '<tr><td>用户名：</td><td style="text-indent:10em;">'+ item.username +'</td></tr><tr><td>昵称：</td><td style="text-indent:10em;" id="nickname'+item.Id+'">'+ item.nickname+'</td><td style="text-indent:7em;"><button class="change1" data-index="'+item.Id+'">编辑</button></td></tr><tr><td>邮箱：</td><td style="text-indent:10em;" id="email'+item.Id+'">'+ item.email+'</td><td style="text-indent:7em;"><button class="change2" data-index="'+item.Id+'">编辑</button></td></tr><tr><td>生日：</td><td style="text-indent:10em;" id="birthday'+item.Id+'">'+ item.birthday+'</td><td style="text-indent:7em;"><button class="change3" data-index="'+item.Id+'">编辑</button></td></tr><tr><td>地域：</td><td style="text-indent:10em;" id="province'+item.Id+'">'+ item.province+'</td><td style="text-indent:7em;"><button class="change4" data-index="'+item.Id+'">编辑</button></td></tr><tr><td>注册日期：</td><td style="text-indent:10em;">'+ item.date+'</td></tr>'
                }
                rows.push(str)
            })
            $('#tb').empty().append(rows.join(''))
           
        }
    })
}
getList()

$('#tb').on('click','.change1',function(){ 
    const id=$(this).attr('data-index')
    const content='nickname'+id
    document.getElementById(content).innerHTML = '<input type="text" placeholder="" id="'+content+'" name="input">'
    this.innerHTML = '<input type="button" value="确定" id="btn"><input type="button" value="取消" id="btn1">'
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        var input = $('input[id="'+content+'"]').val()
        console.log(input)
        console.log(token)
        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:3007/api/userinfo/nickname',
            headers: {'Authorization': token},
            data:{
                id:id,
                nickname:input,
            },
            success:function(data){
                if(data.status==0){
                    alert('修改成功')
                    getList()
                }
                else {
                    alert('修改失败,请重新输入')
                }
            }
        })
    }
    var btn1 = document.getElementById('btn1')
    btn1.onclick = function() {
        getList()
    }
})
$('#tb').on('click','.change2',function(){ 
    const id=$(this).attr('data-index')
    const content='email'+id
    document.getElementById(content).innerHTML = '<input type="text" placeholder="" id="'+content+'" name="input">'
    this.innerHTML = '<input type="button" value="确定" id="btn"><input type="button" value="取消" id="btn1">'
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        var input = $('input[id="'+content+'"]').val()
        console.log(input)
        console.log(token)
        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:3007/api/userinfo/email',
            headers: {'Authorization': token},
            data:{
                id:id,
                email:input,
            },
            success:function(data){
                if(data.status==0){
                    alert('修改成功')
                    getList()
                }
                else {
                    alert('修改失败,请重新输入')
                }
            }
        })
    }
    var btn1 = document.getElementById('btn1')
    btn1.onclick = function() {
        getList()
    }
})
$('#tb').on('click','.change3',function(){ 
    const id=$(this).attr('data-index')
    const content='birthday'+id
    document.getElementById(content).innerHTML = '<input type="text" placeholder="" id="'+content+'" name="input">'
    this.innerHTML = '<input type="button" value="确定" id="btn"><input type="button" value="取消" id="btn1">'
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        var input = $('input[id="'+content+'"]').val()
        console.log(input)
        console.log(token)
        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:3007/api/userinfo/birthday',
            headers: {'Authorization': token},
            data:{
                id:id,
                birthday:input,
            },
            success:function(data){
                if(data.status==0){
                    alert('修改成功')
                    getList()
                }
                else {
                    alert('修改失败,请重新输入')
                }
            }
        })
    }
    var btn1 = document.getElementById('btn1')
    btn1.onclick = function() {
        getList()
    }
})
$('#tb').on('click','.change4',function(){ 
    const id=$(this).attr('data-index')
    const content='province'+id
    document.getElementById(content).innerHTML = '<input type="text" placeholder="" id="'+content+'" name="input">'
    this.innerHTML = '<input type="button" value="确定" id="btn"><input type="button" value="取消" id="btn1">'
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        var input = $('input[id="'+content+'"]').val()
        console.log(input)
        console.log(token)
        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:3007/api/userinfo/province',
            headers: {'Authorization': token},
            data:{
                id:id,
                province:input,
            },
            success:function(data){
                if(data.status==0){
                    alert('修改成功')
                    getList()
                }
                else {
                    alert('修改失败,请重新输入')
                }
            }
        })
    }
    var btn1 = document.getElementById('btn1')
    btn1.onclick = function() {
        getList()
    }
})
getList()