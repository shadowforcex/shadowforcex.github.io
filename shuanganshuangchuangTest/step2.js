/**
 * Created by shadowforce on 2017/6/1.
 */
var setupVal={
    speed:1,
    touchMoveSpeedSet:0.5,
    beginGamma:0,
    touchMoved:false,
    loadComplete:0
}


$(document).ready(function(){

    //alert(3.51);
    $(".mainOutter").eq(window.location.hash==""?0:Number(window.location.hash.replace("#",""))-1).addClass("onShow");


    bgLoad("#bgImg1");

    bgLoad("#bgImg2");

    bgLoad("#bgImg3");

    bgLoad("#bgImg4");


    if (window && window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", orientationHandler , false);
    }
    jinzhishuping();
    touchMove();

    setTimeout(function(){
        if(setupVal.loadComplete !=4){
            alert("网速过慢10秒未全部加载完成");
            $(".loadingShadow").addClass("hidden");
            $("#bgImg1").closest(".imgPart").find(".arrowStyle" ).unbind();
            $("#bgImg2").closest(".imgPart").find(".arrowStyle" ).unbind();
            $("#bgImg3").closest(".imgPart").find(".arrowStyle" ).unbind();
            $("#bgImg4").closest(".imgPart").find(".arrowStyle" ).unbind();

            bgSetMid("#bgImg1");
            bgSetMid("#bgImg2");
            bgSetMid("#bgImg3");
            bgSetMid("#bgImg4");

            changeMess("#bgImg1");
            changeMess("#bgImg2");
            changeMess("#bgImg3");
            changeMess("#bgImg4");
        }

    },10000);

});
function bgLoad(id){

    console.log(id);

    if($(id)[0].complete==true){
        setupVal.loadComplete+= 1;

        console.log(id+"in");


        var innerWidth= $(id).width();

        var outterWidth= $(id).closest(".mainOutter").width();

        var mid= (innerWidth-outterWidth)/2;

        $(id).closest(".imgPart").css("left",-mid+"px");


        changeMess(id);

        //判断加载完成


        if(setupVal.loadComplete==4){//4为加载的展墙数
            $(".loadingShadow").addClass("hidden");
        }
        return;
    }

    $(id).load(function(e){

        setupVal.loadComplete+= 1;

        console.log(id+"in");


        var innerWidth= $(e.currentTarget).width();

        var outterWidth= $(e.currentTarget).closest(".mainOutter").width();

        var mid= (innerWidth-outterWidth)/2;

        $(e.currentTarget).closest(".imgPart").css("left",-mid+"px");


            changeMess(id);

        //判断加载完成


        if(setupVal.loadComplete==4){//4为加载的展墙数
           $(".loadingShadow").addClass("hidden");
        }

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


    var innerWidth=  $(".onShow").find(".bgImg").width();

    var outterWidth=  $(".onShow").find(".bgImg").closest(".mainOutter").width();
    var mid=(innerWidth-outterWidth)/2;
    var tempCenter= Number($(".onShow").find(".imgPart").css("left").replace("px",""));;
    if(setupVal.touchMoved==false){

        setupVal.touchMoved=true;
        setupVal.beginGamma=event.gamma*setupVal.speed,
         tempCenter=mid;

        return false;
    }

   // document.getElementById("gamma").innerHTML = event.gamma||0;



    if(tempCenter+(event.gamma*setupVal.speed- setupVal.beginGamma)<(-2*mid)  ){

        $(".onShow").find(".imgPart").css("left",-2*mid);
    }
   else if(tempCenter+(event.gamma*setupVal.speed- setupVal.beginGamma)>0){

        $(".onShow").find(".imgPart").css("left",0);
    }else{
        $(".onShow").find(".imgPart").css("left",tempCenter+(event.gamma*setupVal.speed- setupVal.beginGamma));

    }
    //$(".onShow").find(".imgPart").css("left",(-mid+event.alpha*setupVal.speed<(-2*mid)?-2*mid:-mid+event.alpha*setupVal.speed>0?0:-mid+event.alpha*setupVal.speed)+"px");


}



function touchMove(){

    $(".onShow").on('touchstart', function (e) {

        //e.preventDefault();
       // $("#audio")[0].play();

        window.removeEventListener("deviceorientation", orientationHandler , false);
        setupVal.touchMoved=false
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

    });

    $(".onShow").bind('touchend', function (e) {
        //  e.preventDefault();

        if (window && window.DeviceOrientationEvent){
            window.addEventListener("deviceorientation", orientationHandler , false);
        }

    });

}

function  jinzhishuping(){
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

    function hengshuping() {
        if (window.orientation == 90 || window.orientation == -90) {
           $(".jinzhihenpingShadow").removeClass("hidden");
        } else {
            $(".jinzhihenpingShadow").addClass("hidden");
        }
    }
}

function bgSetMid(id){
    var innerWidth= $(id).width();

    var outterWidth= $(id).closest(".mainOutter").width();

    var mid= (innerWidth-outterWidth)/2;
    $(id).closest(".imgPart").css("left",-mid+"px");
}