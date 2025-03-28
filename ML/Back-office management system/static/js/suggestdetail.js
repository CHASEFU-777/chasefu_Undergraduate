

function getsuggest() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/getSuggestById/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
         
          if (res.status !== 0) return alert('获取案例详情！')
          document.getElementById("title").value = res.data[0].nickname
          document.getElementById("content").value = res.data[0].content
         

        }
      })
    }
    
    getsuggest()
  

    $('#change').click(function(){
      alert("标记处理成功")
  })