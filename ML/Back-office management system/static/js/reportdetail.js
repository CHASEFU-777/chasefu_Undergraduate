

function getreport() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/getReportById/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log( res.data[0])
         
          if (res.status !== 0) return alert('获取案例详情！')
         
         
       
          document.getElementById("1").value = res.data[0].username
          document.getElementById("2").value = res.data[0].age
          document.getElementById("3").value = res.data[0].Idnumber
          document.getElementById("4").value = res.data[0].area
          document.getElementById("5").value = res.data[0].job
          document.getElementById("6").value = res.data[0].eas_kind
          document.getElementById("7").value = res.data[0].eas_money
          document.getElementById("8").value = res.data[0].eas_describe
          document.getElementById("9").value = res.data[0].eas_number
          document.getElementById("10").value = res.data[0].eas_message
          document.getElementById("11").value = res.data[0].eas_app
          document.getElementById("12").value = res.data[0].eas_web
          document.getElementById("13").value = res.data[0].eas_society_username
          document.getElementById("14").value = res.data[0].eas_deal_username


        }
      })
    }
    
    getreport()
  
    $('#change').click(function(){
      alert("标记处理成功")
  })