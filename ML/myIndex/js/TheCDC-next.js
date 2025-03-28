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
                if(item.Id==code){

                
                var str = '<tr><td>' + item.Id + '</td><td>' + item.Type + '</td><td>' + item.Instruction+'</td></tr>'
            }rows.push(str)
            })
            $('#tb').empty().append(rows.join(''))
        }
    })
}
getList()