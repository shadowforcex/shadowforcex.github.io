var fileList=[];

$(document).ready(function () {
    init();
});

function init(){
    $(".uploadLogo").change(uploadChangelistener);
    $(".uploadDel").click(uploadDelClickListener);
}
function uploadDelClickListener(e){
    uploadDelClickDel(e);
}
function uploadChangelistener(e) {
    changeView(e)
    
}

function changeView(e) {
    var files = $(".uploadLogo").prop("files");
   
    var length = files.length;
    for (var i = 0; i < length; i++) {
        fileread(files,i,e)
        
    }

}

function uploadDelClickDel (e){


  
    // var index = $(this).parent().index();
    // $(this).parent().remove();
    // that.filesList.splice(index, 1);
    // console.log('我删除啦', index);
    

    swal({
        title: "确认要删除吗?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            console.log(fileList);
            console.log(Number($(e.currentTarget).parent().find(".uploadNum").html()));
            fileList.splice($(e.currentTarget).parent().find(".uploadNum").html(),1);
            console.log(fileList);
           
          swal("删除成功", {
            icon: "success",
          });
        } else {
          swal("已取消");
        }
      });

}

function fileread(files,i,e){
    var reader = new FileReader();
    reader.readAsDataURL(files[i]);
    reader.onload = function () {
        var $temp = $(".uploadPart").eq(0).clone(true);
        $temp.removeClass("hidden");
        // $temp.find(".img").attr("src",reader.result)
  
        $temp.find(".uploadName").html(files[i]["name"]);
        $temp.find(".uploadNum").html(i)
        $(e.currentTarget).parent().after($temp);
        fileList.push(files[i])
     
    };
}

