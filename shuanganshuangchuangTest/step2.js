/**
 * Created by shadowforce on 2017/6/1.
 */
var setupVal={
    speed:17,
    touchMoveSpeedSet:0.5,
    beginGamma:0,
    firstTime:true
}


$(document).ready(function(){

    alert(2.8);


    bgLoad("#bgImg1");

    bgLoad("#bgImg2");
    if (window && window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", orientationHandler , false);
    }

    touchMove();

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

            $(".onShow").unbind();

            $(".onShow").removeClass("onShow");

            $(e.currentTarget).closest(".mainOutter").prev().addClass("onShow");
        }else{
            $(e.currentTarget).closest(".mainOutter").animate({left:0},0).animate({left:"-100%"},500);
            $(e.currentTarget).closest(".mainOutter").next().animate({left:"100%"},0).animate({left:0},500);

            $(".onShow").unbind();

            $(".onShow").removeClass("onShow");

            $(e.currentTarget).closest(".mainOutter").next().addClass("onShow");
        }

       touchMove();
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
    if(setupVal.firstTime==true){
        setupVal.beginGamma=event.gamma*setupVal.speed;
        setupVal.firstTime=false;
        return;
    }
   // document.getElementById("gamma").innerHTML = event.gamma||0;

    var innerWidth=  $(".onShow").find(".bgImg").width();

    var outterWidth=  $(".onShow").find(".bgImg").closest(".mainOutter").width();
    var mid= (innerWidth-outterWidth)/2;

    if(-mid+(event.gamma*setupVal.speed- setupVal.beginGamma)<(-2*mid)  ){

        $(".onShow").find(".imgPart").css("left",-2*mid);
    }
   else if(-mid+(event.gamma*setupVal.speed- setupVal.beginGamma)>0){

        $(".onShow").find(".imgPart").css("left",0);
    }else{
        $(".onShow").find(".imgPart").css("left",-mid+(event.gamma*setupVal.speed- setupVal.beginGamma));

    }
    //$(".onShow").find(".imgPart").css("left",(-mid+event.alpha*setupVal.speed<(-2*mid)?-2*mid:-mid+event.alpha*setupVal.speed>0?0:-mid+event.alpha*setupVal.speed)+"px");





}



function touchMove(){

    $(".onShow").on('touchstart', function (e) {

        //e.preventDefault();

        window.removeEventListener("deviceorientation", orientationHandler , false);
        setupVal.firstTime=true;
        startX = e.originalEvent.changedTouches[0].pageX;

    });

    $(".onShow").bind('touchmove', function (e) {
        moveEndX = e.originalEvent.changedTouches[0].pageX;

        var movedX = (moveEndX - startX)*setupVal.touchMoveSpeedSet;
        var $ele=$(e.currentTarget);


        var innerWidth=  $(".onShow").find(".bgImg").width();

        var outterWidth=  $(".onShow").find(".bgImg").closest(".mainOutter").width();
        var mid= (innerWidth-outterWidth)/2;

        var left=Number($(".onShow").find(".imgPart").css("left").replace("px",""));

        if(movedX+left<(-2*mid)  ){

            $(".onShow").find(".imgPart").css("left",-2*mid);
        }
        else if(movedX+left>0){

            $(".onShow").find(".imgPart").css("left",0);
        }else{
            $(".onShow").find(".imgPart").css("left",movedX+left);

        }


        //   console.log(event);
    });

    $(".onShow").bind('touchend', function (e) {
        //  e.preventDefault();

        if (window && window.DeviceOrientationEvent){
            window.addEventListener("deviceorientation", orientationHandler , false);
        }

    });

}