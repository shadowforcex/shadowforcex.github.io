/**
 * Created by shadowforce on 2016/7/6.
 */
$(document).ready(function(){

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

    var maxSize=$(window).width()/fontSize;
    var minSize=$(window).width()*0.8/fontSize;

    var tempSize=tempElement.width()/fontSize;

    if(tempSize>=maxSize){
        judge=true;

    }else if(tempSize<=minSize){

        judge=false;
    }


    if(judge){
        tempElement.css("width",tempSize-0.1+"rem");
        tempElement.css("height",tempSize-0.1+"rem");
        tempElement.css("margin-left",-Math.floor((tempSize-0.1)/2)+"rem");
        tempElement.css("margin-Top",-Math.floor((tempSize-minSize)/2)+"rem");
    }else{
        tempElement.css("width",tempSize+0.1+"rem");
        tempElement.css("height",tempSize+0.1+"rem");
        tempElement.css("margin-left",Math.floor(-(tempSize+0.1)/2)+"rem");
        tempElement.css("margin-Top",Math.floor(-(tempSize-minSize)/2)+"rem");
    }

}