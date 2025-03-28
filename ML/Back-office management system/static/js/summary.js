function getcaseList() {
 
      $.ajax({
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/getCaseTop',
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
          if (res.status !== 0) return alert('获取列表失败！')
          var rows = []
          $.each(res.data, function (i, item) {
         
            var str = '<tr><td class="text-center"><h4>'+(i+1)+'</h4></td><td><h5 class="m-b-0">'+item.title+'</h5></td><td class="text-right"><h5 class="m-b-0 text-success">'+item.count+'</h5></td></tr>'
          
            rows.push(str)
          })
         
            $('#tb').empty().append(rows.join(''))
         
          
        }
      })
    }
    
    getcaseList()

    function getvolList() {
      
          $.ajax({
            method: 'GET',
            url: 'http://81.70.0.177:3007/my/getVolTop',
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
            success: function (res) {
              console.log(res)
              if (res.status !== 0) return alert('获取列表失败！')
              var rows = []
              $.each(res.data, function (i, item) {
             
                var str = '<tr><td class="text-center"><h4>'+(i+1)+'</h4></td><td><h5 class="m-b-0">'+item.vol_title+'</h5></td><td class="text-right"><h5 class="m-b-0 text-success">'+item.count+'</h5></td></tr>'
              
                rows.push(str)
              })
             
                $('#tb2').empty().append(rows.join(''))
             
              
            }
          })
        }
        
        getvolList()
      
        function getnumList() {
      
          $.ajax({
            method: 'GET',
            url: 'http://81.70.0.177:3007/my/getUsersNum',
            headers: {
              'Authorization': localStorage.getItem('itheima No1. ^_^')
          },
            success: function (res) {
              console.log(res.count)
              if (res.status !== 0) return alert('获取列表失败！')
              $("#usernum").val(res.count+'位') 
             
              
            }
          })
        
        $.ajax({
          method: 'GET',
          url: 'http://81.70.0.177:3007/my/getMangersNum',
          headers: {
            'Authorization': localStorage.getItem('itheima No1. ^_^')
        },
          success: function (res) {
            console.log(res.count)
            if (res.status !== 0) return alert('获取列表失败！')
            $("#managernum").val(res.count+'位') 
           
            
          }
        })
        // $.ajax({
        //   method: 'GET',
        //   url: 'http://81.70.0.177:3007/my/getMangersNum',
        //   headers: {
        //     'Authorization': localStorage.getItem('itheima No1. ^_^')
        // },
        //   success: function (res) {
        //     console.log(res)
        //     if (res.status !== 0) return alert('获取列表失败！')
        //     document.getElementById("managet").value = res.count
           
            
        //   }
        // })
      }
        getnumList()
      
  