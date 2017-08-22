/**
 * Created by shadowforce on 2017/8/21.
 */
$(document).ready(function(){
    $(this).find(".detailPart").hide(0);
    $(".bpLineStyle").click(function(){
        if($(this).find(".detailPart").css("display")=="none"){

            $(this).find(".arrow").attr("src",  $(this).find(".arrow").attr("src").replace("4","5"));
        }else{

            $(this).find(".arrow").attr("src",  $(this).find(".arrow").attr("src").replace("5","4"));
        }
        console.log( $(this).find(".arrow").attr("src"));
        $(this).find(".detailPart").toggle(500);

    });

    $(".title>div").click(function(){
        $(".onSelect").removeClass("onSelect");
        $(this).addClass("onSelect");
    });

})