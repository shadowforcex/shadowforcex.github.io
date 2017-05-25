/**
 * Created by shadowforce on 2016/12/12.
 */
$(document).ready(function(){
    $(".activityRules").click(function(){
        $(".boxShadow").removeClass("hidden");
        $(".boxPanel1").removeClass("hidden");
    });
    $(".close").click(function(){
        $(".boxShadow").addClass("hidden");
        $(".boxPanel").addClass("hidden");
    })
    $(".lightUp").click(function(){
        window.location.href="../page2/index.html"
    })
    $(".getGift").click(function(){

        //$.jWfxWarning( 提示语句, 提示头，点击确定的回掉函数（没有则直接关闭）)；
        $.jWfxWarning(" 您尚未点亮FSG，请先点亮FSG","提醒" );
    })

})