function getsubject() {

    var id = location.search.substring(1);
      $.ajax({
        
        method: 'GET',
        url: 'http://81.70.0.177:3007/person/getQuestion/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
        success: function (res) {
          console.log(res)
          var b=""
          if(res.data[0].type=="1"){
            b="判断题"
          }else if(res.data[0].type=="2"){
            b="单选题"
          }else{
            b="多选题"
          }
          if (res.status !== 0) return alert('获取案例详情！')
          document.getElementById("title").value = res.data[0].title
          document.getElementById("eas_classify").value =b
          document.getElementById("choose1").value = res.data[0].optionList[0].content
          document.getElementById("choose2").value = res.data[0].optionList[1].content
          document.getElementById("choose3").value = "无"
          document.getElementById("choose4").value = "无"
          document.getElementById("answer").value = res.data[0].answer
          document.getElementById("experice").value = res.data[0].explainContent
          document.getElementById("choose3").value = res.data[0].optionList[2].content
          document.getElementById("choose4").value = res.data[0].optionList[3].content
         

        }
      })
    }
    
    getsubject()