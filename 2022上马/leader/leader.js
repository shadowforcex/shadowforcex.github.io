var logoFileList = [];
var healthFileList = [];

$(document).ready(function () {
    init();
});

//初始化
function init() {
    $(".uploadLogo,.learHealthCode").change(uploadChangelistener);
    $(".uploadDel").click(uploadDelClickListener);
    $(".choiceLine").click(choiceClickListener)
}

//监听删除按钮
function uploadDelClickListener(e) {
    uploadDelClickDel(e);
}

//监听上传按钮 第三个参数 logo=0 leader=1ss
function uploadChangelistener(e) {
    if ($(e.currentTarget).hasClass("uploadLogo")) {
        changeView(e, logoFileList, 0)
    }
    if ($(e.currentTarget).hasClass("learHealthCode")) {
        changeView(e, healthFileList, 1)
    }
}

//监听单选框
function choiceClickListener(e) {
    changeradio(e)
}

//点击图片上传
function changeView(e, fileList, type) {
    var tempele = $(e.currentTarget).parent().next()
    if (tempele.hasClass("uploadPart")) {
        tempele.remove();
    }
    fileList = [];
    var files = $(e.currentTarget).prop("files");
    fileread(files, 0, e, fileList, type)

}

//删除图片
function uploadDelClickDel(e) {
    swal({
        title: "确认要删除吗?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                if ($(e.currentTarge).next().html() == "0") {
                    logoFileList.splice(0, 1);
                }
                if ($(e.currentTarge).next().html() == "1") {
                    healthFileList.splice(0, 1);
                }
                $(e.currentTarget).parent().remove();
                // console.log(logoFileList);
                // console.log(healthFileList);
                swal("删除成功", {
                    icon: "success",
                });
            } else {
                swal("已取消");
            }
        });
}

//读取文件
function fileread(files, i, e, fileList, type) {
    // console.log(fileList);
    var res = judgeUploadImg(files, i, e, fileList, type);
    if (res == false) {
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[i]);
    reader.onload = function () {
        var $temp = $(".uploadPart").eq(0).clone(true);
        $temp.removeClass("hidden");
        $temp.find(".uploadName").html(files[i]["name"]);
        $temp.find(".uploadNum").html(type)
        $(e.currentTarget).parent().after($temp);
        fileList.push(files[i])
        // console.log(fileList[0]);
        //console.log(reader.result);//转base64
    };
}

//验证图片
function judgeUploadImg(files, i, e, fileList, type) {

    if (!/image\/\w+/.test(files[i].type)) {
        swal({
            title: "请确保文件为图像类型",
            text: "",
            icon: "warning",
        });
        files[i] = "";
        if (type == 1) {
            $(".learHealthCode.imageUpload").val('');
        }
        if (type == 0) {
            $(".uploadLogo.imageUpload").val('');
        }
        var tempele = $(e.currentTarget).parent().next()
        if (tempele.hasClass("uploadPart")) {
            tempele.remove();
            fileList = [];
        }
        return false;
    }
    if ((files[i].size / 1024 / 1024).toFixed(2) > 1) {
        swal({
            title: "图片过大，应小于10MB",
            text: "",
            icon: "warning",
        });
        files[i] = "";
        if (type == 1) {
            $(".learHealthCode.imageUpload").val('');
        }
        if (type == 0) {
            $(".uploadLogo.imageUpload").val('');
        }
        var tempele = $(e.currentTarget).parent().next()
        if (tempele.hasClass("uploadPart")) {
            tempele.remove();
            fileList = [];
        }
        return false;
    }
}

//单选框实现
function changeradio(e) {
    $(e.currentTarget).parent().find(".checked").removeClass("checked");
    $(e.currentTarget).find(".radioCheck").addClass("checked");
}