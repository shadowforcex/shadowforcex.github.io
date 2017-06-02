/**
 * Created by shadowforce on 2017/6/1.
 */
var setupVal={
    speed:20,
}


$(document).ready(function(){




    bgLoad("#bgImg1");

    bgLoad("#bgImg2");
    if (window && window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", orientationHandler, false);
    }

});
function bgLoad(id){

    $(id).load(function(e){

        var innerWidth= $(e.currentTarget).width();

        var outterWidth= $(e.currentTarget).closest(".mainOutter").width();

        var mid= (innerWidth-outterWidth)/2;

        $(e.currentTarget).closest(".imgPart").css("left",-mid+"px");


            changeMess(id);


    });

}



function changeMess(id){


   $(id).closest(".imgPart").find(".arrowStyle" ).click(function(e){

        if(  $(e.currentTarget).hasClass("leftArrow")  ){
            $(e.currentTarget).closest(".mainOutter").animate({left:0},0).animate({left:"100%"},500);
            $(e.currentTarget).closest(".mainOutter").prev().animate({left:"-100%"},0).animate({left:0},500);
            $(".onShow").removeClass(".onShow");

            $(e.currentTarget).closest(".mainOutter").prev().addClass("onShow");
        }else{
            $(e.currentTarget).closest(".mainOutter").animate({left:0},0).animate({left:"-100%"},500);
            $(e.currentTarget).closest(".mainOutter").next().animate({left:"100%"},0).animate({left:0},500);
            $(".onShow").removeClass(".onShow");

            $(e.currentTarget).closest(".mainOutter").next().addClass("onShow");
        }
       //
       //var innerWidth=  $(".onShow").find(".imgPart").width();
       //
       //var outterWidth=  $(".onShow").find(".imgPart").closest(".mainOutter").width();
       //
       //var mid= (innerWidth-outterWidth)/2;
       //
       //$(".onShow").find(".imgPart").css("left",(-mid+event.alpha*setupVal.speed<(-2*mid)?-2*mid:-mid+event.alpha*setupVal.speed>0?0:-mid+event.alpha*setupVal.speed)+"px");


    });

}

function orientationHandler(event) {

   // document.getElementById("gamma").innerHTML = event.gamma||0;

    var innerWidth=  $(".onShow").find(".imgPart").width();

    var outterWidth=  $(".onShow").find(".imgPart").closest(".mainOutter").width();

    var mid= (innerWidth-outterWidth)/2;


    $(".onShow").find(".imgPart").css("left",(-mid+event.alpha*setupVal.speed<(-2*mid)?-2*mid:-mid+event.alpha*setupVal.speed>0?0:-mid+event.alpha*setupVal.speed)+"px");

}
