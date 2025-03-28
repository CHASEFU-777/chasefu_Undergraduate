function getsortList() {
    var id = localStorage.getItem('caseid');
    var page= location.search.substring(1);
      $.ajax({
        method: 'GET',
        url: 'http://81.70.0.177:3007/my/case/cases/'+id,
        headers: {
          'Authorization': localStorage.getItem('itheima No1. ^_^')
      },
      data:{page:page},
        success: function (res) {
          console.log(res)
          nowpage=res.currentPage
          totalpage=res.totalPages
          if (res.status !== 0) return alert('获取分类列表失败！')
          var rows = []
          var cid=0
          $.each(res.data, function (i, item) {
            totalpage=res.totalPages
        totalpage1=totalpage-1
        totalpage2=totalpage-2
        totalpage3=totalpage-3
        nowpage=res.currentPage
        var is_delete=""
        var state=""
            if(item.is_delete == '0'){
              is_delete = '正常'
          }else{
              is_delete = '已删除'
          } 
         if(item.state=='已发布'){
          state=item.count
         }
           if(item.alias==null){item.alias = '无';}
           
            var str = '<tr><td align="center">'+(i+1+(nowpage-1)*10)+'</td><td align="center">'+item.title+'</td><td align="center" style="text-overflow: ellipsis; -moz-text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">'+item.content+'</td><td align="center">'+item.author+'</td><td align="center">'+item.pub_date+'</td><td align="center">'+state+'</td><td align="center">'+is_delete+'</td><td><button type="button" class="btn btn-primary"  style="margin-left: 10px;"  ><a href="casedetail.html?'+item.id+'" style="text-decoration: none;color: #FFFFFF;">详情</a></button></td></td></tr>'
          
            rows.push(str)
          })
         
         
            for(page=1;page<=totalpage;page++) {
              document.getElementById("select-page").options.add(new Option(page))}
            $('#tb').empty().append(rows.join(''))
            
           if(totalpage<="7"||nowpage >= totalpage2){
            var a = document.getElementById('page2');
      
            a.style.display = 'none';
           }
           if(totalpage<="6"||nowpage=="2"||nowpage=="3"){
            var b = document.getElementById('page1');
      
            b.style.display = 'none';
           }
           if(nowpage=="1" ){var c = document.getElementById('pageM');
      
           c.style.display = 'none';}
           if(totalpage<="2"){var d = document.getElementById('pageL');
      
           d.style.display = 'none';
           var f = document.getElementById('pageM');
      
           f.style.display = 'none';
      
           }
           if(totalpage=="1"){var e = document.getElementById('p2');
      
           e.style.display = 'none'}
           if(nowpage == "2"){document.getElementById("pageM").innerHTML='<li><a href="check-Hmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-Hmanagers.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            if(nowpage == totalpage){document.getElementById("pageM").innerHTML='<li><a href="check-Hmanagers.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
           }
           if(nowpage == totalpage1){document.getElementById("pageM").innerHTML='<li><a href="check-Hmanagers.html?'+(nowpage-1)+'">'+(nowpage-1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-Hmanagers.html?'+nowpage+'">'+nowpage+'</a></li>'}
           if(nowpage == totalpage2){document.getElementById("pageM").innerHTML='<li><a href="check-Hmanagers.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-Hmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>'}
           if(nowpage>="3" && nowpage <= totalpage3){document.getElementById("pageM").innerHTML='<li><a href="check-Hmanagers.html?'+nowpage+'">'+nowpage+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-Hmanagers.html?'+(nowpage+1)+'">'+(nowpage+1)+'</a></li>';
            document.getElementById("pageM").innerHTML+='<li><a href="check-Hmanagers.html?'+(nowpage+2)+'">'+(nowpage+2)+'</a></li>'}
            document.getElementById("pageL").innerHTML='<li><a href="check-Hmanagers.html?'+totalpage+'">'+totalpage+'</a></li>'
            $('#last').click(function(){if(nowpage == 1){window.location.href=""}else{
              window.location.href="check-Hmanagers.html?"+(nowpage-1)}
            })
            $('#next').click(function(){if(nowpage == totalpage){window.location.href=""}else{
              window.location.href="check-Hmanagers.html?"+(nowpage+1)}
            })
            $('#go').click(function(){var gopage=$('#select-page').val();
            window.location.href="check-Hmanagers.html?"+gopage})
            
            document.getElementById("text-page").innerHTML='共'+totalpage+'页,当前在'+nowpage+'页，选择页码点击GO跳转'
        }
      })
    }
    
    getsortList()
  