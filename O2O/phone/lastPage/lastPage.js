/**
 * Created by shadowforce on 2016/7/6.
 */
var lastWidth;
var lastMarginLeft;
var lastMarginTop;
$(document).ready(function(){
    lastWidth =$(".mainLight").width()/(Number($("html").css("font-size").replace("px","")));
    lastMarginLeft=-lastWidth/2;
    lastMarginTop=-(lastWidth- $(window).width()*0.8/(Number($("html").css("font-size").replace("px",""))))/2;

   setInterval(animate,100);
    weh();
    $(window).resize(weh);

});
function weh(){
    $(".mainText").height( $(".mainText").width());
    $(".mainLight").height( $(".mainLight").width());
}

var judge=true;





function animate(){


    var tempElement= $(".mainLight");
    var fontSize=Number($("html").css("font-size").replace("px",""));

    var step=1/fontSize;

    var maxSize=$(window).width()/fontSize;
    var minSize=$(window).width()*0.8/fontSize;

    var tempSize=lastWidth;

    if(tempSize>=maxSize){
        judge=true;

    }else if(tempSize<=minSize){

        judge=false;
    }


    if(judge){

        var tempWidthPx =getNumberPx(tempSize-step);
        console.log(getXiaoShu(tempWidthPx));
        console.log(getXiaoShu( getNumberPx((tempSize-step)/2)));
        if(getXiaoShu(tempWidthPx)>0.5){
            console.log("1");
            if(getXiaoShu( getNumberPx((tempSize-step)/2))>0.5   ){
                tempElement.css("width",tempSize-step+"rem");
                tempElement.css("height",tempSize-step+"rem");
                tempElement.css("margin-left",-(tempSize-step)/2+"rem");
                tempElement.css("margin-Top",-(tempSize-minSize)/2+"rem");
            }else{
                console.log("2");
                tempElement.css("width",lastWidth+"rem");
                tempElement.css("height",lastWidth+"rem");
                tempElement.css("margin-left",-(tempSize-step)/2+"rem");
                tempElement.css("margin-Top",-(tempSize-minSize)/2+"rem");
            }


        }else{
            if(getXiaoShu( getNumberPx((tempSize-step)/2))>0.5   ){
                console.log("3");
                tempElement.css("width",tempSize-step+"rem");
                tempElement.css("height",tempSize-step+"rem");
                tempElement.css("margin-left",lastMarginLeft+"rem");
                tempElement.css("margin-Top",lastMarginTop+"rem");
            }else{
                console.log("4");
                tempElement.css("width",tempSize-step+"rem");
                tempElement.css("height",tempSize-step+"rem");
                tempElement.css("margin-left",-(tempSize-step)/2+"rem");
                tempElement.css("margin-Top",-(tempSize-minSize)/2+"rem");
            }
        }



        lastWidth=tempSize-step;
        lastMarginLeft=-(tempSize-step)/2;
        lastMarginTop=-(tempSize-minSize)/2;

    }else{
        tempElement.css("width",tempSize+step+"rem");
        tempElement.css("height",tempSize+step+"rem");
        tempElement.css("margin-left",-(tempSize+step)/2+"rem");
        tempElement.css("margin-Top",-(tempSize-minSize)/2+"rem");

        lastWidth=tempSize+step;
        lastMarginLeft=-(tempSize-step)/2;
        lastMarginTop=-(tempSize-minSize)/2;
    }

    function getNumberPx(num){
        return num*fontSize/fontSize;
    }

    function getXiaoShu(num){
        return num-Math.floor(num);
    }

}