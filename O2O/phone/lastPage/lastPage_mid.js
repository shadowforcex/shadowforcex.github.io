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

    var step=2/fontSize;

    var maxSize=getSmooth($(window).width())/fontSize;
    var minSize=getSmooth($(window).width()*0.8)/fontSize;

    var tempSize=getSmooth(tempElement.width())/fontSize;
//    var tempSize=tempElement.width()/fontSize;
    if(tempSize>=maxSize){
        judge=true;

    }else if(tempSize<=minSize){

        judge=false;
    }


    if(judge){
        tempElement.css("width",(tempSize-step)+"rem");
        tempElement.css("height",(tempSize-step)+"rem");
        tempElement.css("margin-left",(-(tempSize-step)/2)+"rem");
        tempElement.css("margin-Top",(-(tempSize-minSize)/2)+"rem");


    }else{
        tempElement.css("width",(tempSize+step+"rem"));
        tempElement.css("height",(tempSize+step+"rem"));
        tempElement.css("margin-left",(-(tempSize+step)/2)+"rem");
        tempElement.css("margin-Top",(-(tempSize-minSize)/2)+"rem");
    }


    function getSmooth(num){
       // num=Math.floor(num);
        console.log(num);
        return num%2==0? num:num+1;
    }

}