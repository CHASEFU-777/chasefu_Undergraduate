

function getcase() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/case/casess/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
         
          if (res.status !== 0) return alert('获取案例详情！')
         
          var e = new ice.editor("content");
          e.setValue(res.data.content);
          document.getElementById("cover_img").src = res.data.cover_img
          document.getElementById("head_img").src = res.data.caseImg
          document.getElementById("title").value = res.data.title
          console.log(e.getHTML());
         

        }
      })
    }
    
    getcase()
  
