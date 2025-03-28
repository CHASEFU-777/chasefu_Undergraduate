

function getcase() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/getLegalById/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
         
          if (res.status !== 0) return alert('获取案例详情！')
          document.getElementById("title").value = res.data[0].title
          document.getElementById("content").value = res.data[0].eas_text
         

        }
      })
    }
    
    getcase()
  
    $('#change').click(function(){
    var id = location.search.substring(1);
    $.ajax({
        
        method: 'POST',
        url: 'http://81.70.0.177:3007/my/updateLegal',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        data:{
            id:id,
            title:document.getElementById("title").value,
            eas_text: document.getElementById("content").value
        },
        success: function (res) {
          console.log(res)
         
         

        }
      })
})

$('#delete').click(function(){
    var id = location.search.substring(1);
    $.ajax({
        
        method: 'POST',
        url: 'http://81.70.0.177:3007/my/deleteLegal',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        data:{
            id:id,
          
        },
        success: function (res) {
          console.log(res)
         
         

        }
      })
})