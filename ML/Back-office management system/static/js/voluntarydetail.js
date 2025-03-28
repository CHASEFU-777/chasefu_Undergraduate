function getcase() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/api/volunteer/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
         
          if (res.status !== 0) return alert('获取案例详情！')
          document.getElementById("title").value = res.data.vol_title
          document.getElementById("eas_classify").value = res.data.eas_classify
          document.getElementById("vol_total").value = res.data.vol_total
          document.getElementById("registered_num").value = res.data.registered_num
          document.getElementById("starttime").value = res.data.recruit_time_begin
          document.getElementById("endtime").value = res.data.recruit_time_end
          document.getElementById("vol_poeple").value = res.data.vol_hoster
          document.getElementById("hoster_number").value = res.data.hoster_number
          document.getElementById("pub_uni").value = res.data.pub_unit
          document.getElementById("vol_area").value = res.data.vol_place
          document.getElementById("sign_area").value = res.data.sign_place
          document.getElementById("vol_time").value = res.data.vol_time
          document.getElementById("activity_describe").value = res.data.activity_describe
          document.getElementById("vol_condition").value = res.data.vol_condition
         

        }
      })
    }
    
    getcase()

    // $('#change').click(function(){
    //     var id = location.search.substring(1);
    //     $.ajax({
            
    //         method: 'POST',
    //         url: 'http://81.70.0.177:3007/my/updateLegal',
    //         headers: {
    //           'Authorization': localStorage.getItem('itheima No1. ^_^')
    //       },
    //         data:{
    //             id:id,
    //             title:document.getElementById("title").value,
    //             eas_text: document.getElementById("content").value
    //         },
    //         success: function (res) {
    //           console.log(res)
             
             
    
    //         }
    //       })
    // })
    
    // $('#delete').click(function(){
    //     var id = location.search.substring(1);
    //     $.ajax({
            
    //         method: 'POST',
    //         url: 'http://81.70.0.177:3007/my/deleteLegal',
    //         headers: {
    //           'Authorization': localStorage.getItem('itheima No1. ^_^')
    //       },
    //         data:{
    //             id:id,
              
    //         },
    //         success: function (res) {
    //           console.log(res)
             
             
    
    //         }
    //       })
    // })