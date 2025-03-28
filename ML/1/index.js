function getList() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3007/api/getList',
        success: function(res) {
            console.log(res.data)
            var rows = []
            $.each(res.data, (i,item) => {
                var str = '<tr><td>' + item.Id + '</td><td>' + item.UserName + '</td><td>' + '******' +'</td><td>'+ item.NickName+'</td></tr>'
                rows.push(str)
            })
            $('#tb').empty().append(rows.join(''))
        }
    })
}
getList()