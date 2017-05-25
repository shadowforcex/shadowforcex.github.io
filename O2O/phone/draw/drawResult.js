/**
 * Created by shadowforce on 2016/7/14.
 */
$(document).ready(function(){
    var message=window.location.search;

    message= JSON.parse(message.replace("?",'').replace(/%22/g,"\""));

    $("#pf"+message["type"]).removeClass("hidden");

    $(".infoClose").click(function(){
        $(".boxShadow").addClass("hidden");
        $(".info").addClass("hidden");
    });

    $(".note").click(function(){
        $(".boxShadow").removeClass("hidden");
        $(".info").removeClass("hidden");
    });

});
