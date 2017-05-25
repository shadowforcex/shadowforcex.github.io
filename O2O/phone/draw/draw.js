/**
 * Created by shadowforce on 2016/7/14.
 */
var timeoutId;
$(document).ready(function(){
   // setInterval(changePosition,2000);
   // timeoutId = setTimeout(countdown, 2000);

    $(".drawPartStyle").click(goToResPage);


    time(changePosition, 2000)();


});
function time(f, time) {
    return function walk() {
        setTimeout(function () {
            f();
            walk();
        }, time);
    };
}



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

    $("#drawPart"+out[0]).animate({
        left: $("#drawPart"+out[1]).css("left"),
        top:$("#drawPart"+out[1]).css("top"),
    },200);
    $("#drawPart"+out[1]).animate({
        left: $("#drawPart"+out[0]).css("left"),
        top:$("#drawPart"+out[0]).css("top"),
    },200);

    $("#drawPart"+arr[0]).delay(200).animate({
        left: $("#drawPart"+arr[1]).css("left"),
        top:$("#drawPart"+arr[1]).css("top"),
    },200);
    $("#drawPart"+arr[1]).delay(200).animate({
        left: $("#drawPart"+arr[0]).css("left"),
        top:$("#drawPart"+arr[0]).css("top"),
    },200);

    //arr.length = 0;
    //out.length=0;
}