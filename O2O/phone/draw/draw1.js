/**
 * Created by shadowforce on 2016/7/14.
 */
$(document).ready(function(){
    setInterval(changePosition,2000);

    $(".drawPartStyle").click(goToResPage);


});

function goToResPage(e){
    var id = e.currentTarget.id.replace("drawPart","");
        var message={};
        message["type"]=id;

        var sendMessage=JSON.stringify(message);

        window.location.href="drawResult.html?"+sendMessage;

}



function changePosition(){

    $(".drawPartStyle").css("z-index",Math.floor(Math.random()*1000+100));

    var arr = [1,2,3,4];
    var out=[];
    var num =2;
    for(var i=0; i< num;i++){
        var temp = Math.floor(Math.random()*arr.length+1);
        out.push(arr[temp-1]);
        arr.splice(temp-1,1)
    }

    var changeOutLeft0= $("#drawPart"+out[0]).css("left");
    var changeOutTop0=$("#drawPart"+out[0]).css("top");

    var changeOutLeft1= $("#drawPart"+out[1]).css("left");
    var changeOutTop1=$("#drawPart"+out[1]).css("top");

    var changeArrLeft0= $("#drawPart"+arr[0]).css("left");
    var changeArrTop0=$("#drawPart"+arr[0]).css("top");

    var changeArrLeft1= $("#drawPart"+arr[1]).css("left");
    var changeArrTop1=$("#drawPart"+arr[1]).css("top");

    $("#drawPart"+out[0]).animate({
        left:changeOutLeft1,
        top:changeOutTop1,
    },200);
    $("#drawPart"+out[1]).animate({
        left:changeOutLeft0,
        top:changeOutTop0,
    },200);

    $("#drawPart"+arr[0]).delay(200).animate({
        left: changeArrLeft1,
        top:changeArrTop1,
    },200);
    $("#drawPart"+arr[1]).delay(200).animate({
        left: changeArrLeft0,
        top:changeArrTop0,
    },200);

    arr.length = 0;
    out.length=0;
}