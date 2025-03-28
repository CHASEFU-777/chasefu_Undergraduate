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
        url: 'http://127.0.0.1:3007/api/OverviewOfDiabetes/getList',
        success: function(res) {
            console.log(res.data)
            var rows = []
            $.each(res.data, (i,item) => {
                if(item.ID==1){
                    var str = '<tr><td><a href="../navigation/DIAcause.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }
                if(item.ID==2){
                    var str = '<tr><td><a href="../navigation/DIApicture.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }
                if(item.ID==3){
                    var str = '<tr><td><a href="../navigation/DIAcheck.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }
                if(item.ID==4){
                    var str = '<tr><td><a href="../navigation/DIAdiagnose.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }
                if(item.ID==5){
                    var str = '<tr><td><a href="../navigation/DIAidentify.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }
                if(item.ID==6){
                    var str = '<tr><td><a href="../navigation/DIAtreatment.html" target="rightFrame">'+item.Name+ '</ a></td></tr>'
                }

                
                rows.push(str)
            })
            
            



            // $.each(res.data, (i,item) => {
            //     var str = '<tr><td><a href="../navigation/Overview-next.html?id=' +item.Id+'" target="mainFrame">'+item.Name+ '</ a></td></tr>'
            //     rows.push(str)
            // })
            $('#tb').empty().append(rows.join(''))
        }
    })
}
getList()
