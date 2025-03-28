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
        url: 'http://127.0.0.1:3007/api/DIAtreatment/getList',
        success: function(res) {
            console.log(res.data)
            var rows = []
            var ins = []
            $.each(res.data, (i,item) => {
                if(item.id==code){
                var str = '<tr><th style="width:400px;text-indent: 3em;">' +  item.Type + '</th><th>' + item.DWT +'</th></tr>'
            }rows.push(str)
            })
            $('#tb').empty().append(rows.join(''))
            $.each(res.data, (i,item) => {
                if(item.id==code){
                var str = '<tr><td>' +  item.Instructions+'</td></tr>'
            }ins.push(str)
            })
            $('#td').empty().append(ins.join(''))
        }
    })
}
getList()