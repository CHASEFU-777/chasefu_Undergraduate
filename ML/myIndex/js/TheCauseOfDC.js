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
        url: 'http://127.0.0.1:3007/api/TheCauseOfDiabetesComplications/getList',
        success: function(res) {
            console.log(res.data)
            var rows = []
            $.each(res.data, (i,item) => {
                var str = '<tr><td>' + item.Id + '</td><td><a href="../navigation/TheCDC-next.html?id=' +item.Id+'" target="mainFrame">'+item.Type+ '</ a></td></tr>'
                rows.push(str)
            })
            $('#tb').empty().append(rows.join(''))
        }
    })
}
getList()