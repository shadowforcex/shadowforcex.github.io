/**
 * Created by shadowforce on 2016/12/9.
 */
var fsg={
    count:0,
};
$(document).ready(function(){
    FastClick.attach(document.body);
    randomGift();

    $(".giftBox").click(function(){

        //需补充 中奖与否的处理

        $(".boxShadow").removeClass("hidden");

    });

    $(".close").click(function(){
        $(".boxShadow").addClass("hidden");
    })

    //$(".bg").width( window.innerHeight*2 );
    //$(".bg").css("margin-left", -window.innerHeight*2/2 +"px");
    //$(".bg").css("left", "50%");
    //$(".bg").css("margin-top", -window.innerHeight+"px");

    $(".roundBtn").click(function(e){
    var judgement=false;

        if(!$(e.currentTarget).hasClass("onSelect")){
            judgement=judge(e,true);
            if(judgement==true){
                $(e.currentTarget).addClass("onSelect");
                $(e.currentTarget).addClass("click");
                setTimeout(function(){$(e.currentTarget).removeClass("click")},300)
                lightUp();

                if($(".onSelect").length==3){
                    changePage();
                    $(".roundBtn").unbind("click");
                }

            }else{

                return ;
            }
        }else{
            judge(e,false);
            $(e.currentTarget).removeClass("onSelect");
            $(e.currentTarget).addClass("click");
            setTimeout(function(){$(e.currentTarget).removeClass("click")},300)
            lightUp();

        }
    });

});


function judge(e,plus){
    if(plus==true){
        if( fsg.count>=3){
            return false;
        }else{
            fsg.count+=1
            return true;
        }
    }else{
        fsg.count-=1
        return true;
    }

}

function lightUp(){
    for(var i=0;i<  $(".titleFont").length;i++){

        $(".titleFont").eq(i).find("img")[0].src= $(".titleFont").eq(i).find("img")[0].src.replace("Light","");

    }

   var lightCount= $(".onSelect").length;
    for(var i=0;i<lightCount;i++){
        $(".titleFont").eq(i).find("img")[0].src= $(".titleFont").eq(i).find("img")[0].src.replace(".png","")+"Light.png";
    }

}
var timeoutId;
function randomGift(){

    var number=Math.round( Math.random()*2+1)
    giftJump($("#gift"+number));
    timeoutId = setTimeout(randomGift, 600);


}
function changePage(){

    $(".whiteFlash").removeClass("hidden").animate({opacity:0},0).animate({opacity:1},500).animate({opacity:1},500).animate({opacity:1},1000).animate({opacity:0},500);
    $(".whiteFlash .title").addClass("larger");

    setTimeout(function(){
        $(".page1").addClass("hidden");
        //$(".page2").removeClass("hidden");
    },500);
    //
    //setTimeout(function(){
    //    $(".whiteFlash").addClass("smallerAnimate");
    //    //$(".page2").removeClass("hidden");
    //},2000);



    setTimeout(function(){
        $(".whiteFlash").addClass("hidden");
        $(".page2").removeClass("hidden");//.addClass("page2Animate");
    },2500);
}


function giftJump($ele){
    if(!$ele.is(":animated")) {
        $ele.animate({top: 0}, 0).animate({top: "-1rem"}, 50).animate({top: 0}, 50).animate({top: 0}, 0).animate({top: "-1rem"}, 50).animate({top: 0}, 50).animate({top: 0}, 0).animate({top: "-1rem"}, 50).animate({top: 0}, 50);
    }
}