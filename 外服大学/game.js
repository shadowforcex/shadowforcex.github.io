/**
 * Created by Shadowforce on 2019/7/30.
 */
var answer = [

    ["上海外服成立的时间是：","A.1985年8月8日","B.1984年8月8日 ","C.1988年8月8日",2],
    ["外服集团目前有几个事业部：","A.4个事业部","B.	6个事业部","C.	3个事业部",1],
    ["关于上海外服的服务模式，以下表述哪一个是正确的：","A.	上海外服的服务模式是“咨询+服务+技术”  ","B.上海外服的服务模式是“咨询+技术+外包”","C.上海外服的服务模式是“专业+服务+技术”",3]

]
var timeoutId;
var timeoutId2;
var end =false;
var score=0;
$(document).ready(function(){
    init();

})

function init(){
    canvas("myCanvas");
    fillAnwser()
    $(".answer").click(answerListner);

}

function answerListner(e){
    $(".currentGamePart").find(".answer").unbind();
    judge(e);
}

function fillAnwser(){

    for(var i=0;i<3;i++){
        $(".gamePartStyle").eq(i).find(".question").html(answer[i][0]);
        $(".gamePartStyle").eq(i).find(".answer").eq(0).html(answer[i][1]);
        $(".gamePartStyle").eq(i).find(".answer").eq(1).html(answer[i][2]);
        $(".gamePartStyle").eq(i).find(".answer").eq(2).html(answer[i][3]);
        $(".gamePartStyle").eq(i).find(".answer").eq(answer[i][4]-1).addClass("right");
    }

}



function judge(e){
    if($(e.currentTarget).hasClass("right")){
        $(e.currentTarget).addClass("bingo");
        $(".currentGamePart").find(".imgOutter").removeClass("hidden");
        $(".currentGamePart").find(".rightImg").removeClass("hidden");
        score+=1;
    }else{
        $(e.currentTarget).addClass("wrongAnswer");
        $(".currentGamePart").find(".right").addClass("bingo");
        $(".currentGamePart").find(".imgOutter").removeClass("hidden");
        $(".currentGamePart").find(".wrongImg").removeClass("hidden");
    }
    clearTimeout(timeoutId);
    finish();
}
function finResult(){
    $(".currentGamePart").find(".right").addClass("bingo");
    finish();
    clearTimeout(timeoutId);
}


//function getGamePart(e){//定位当前题目父容器
//    return $(e.currentTarget).closest(".gamePartStyle")
//}
function canvas(id){
    var c=document.getElementById(id);
    var context=c.getContext("2d");
    context.lineWidth = 3;
    var add=1.2;
    context.font=16*add+"px Arial";

    context.fillText(30,20,37);


    var totaleSeconds=30;
    var tempSeconds=0;
    var countdown = function () {
        // 时间到
        if (tempSeconds>=totaleSeconds) {
            clearTimeout(timeoutId);
            finResult();
            $(".currentGamePart").find(".imgOutter").removeClass("hidden");
            $(".currentGamePart").find(".wrongImg").removeClass("hidden");
            return;
        }
        tempSeconds+=1;

        context.clearRect(0,0,100*add,100*add);
        context.beginPath();
        context.arc(30, 30, 23, 3*Math.PI/2,  3*Math.PI/2+2*Math.PI*tempSeconds/totaleSeconds , false);
        context.strokeStyle = '#FF8345';

        context.stroke();
        if(tempSeconds==30){
            context.font=16*add+"px Arial";
            context.fillText("0",25,37);
            context.stroke();
        }
        else if(tempSeconds>20){
            context.font=16*add+"px Arial";
            context.fillText("0"+(30-tempSeconds),20,37);
            context.stroke();
        }else{
            context.font=16*add+"px Arial";
            context.fillText(30-tempSeconds,20,37);
            context.stroke();
        }

        timeoutId = setTimeout(countdown, 1000);
    };

    timeoutId = setTimeout(countdown, 1000);
}

function finish(){
    var finTempSecends=2;
    $(".currentGamePart").find(".answer").unbind();
    var countdown = function () {
        // 时间到
        if (finTempSecends <1) {
            //下一页
            switchGamePart();
            clearTimeout(timeoutId2);
            finTempSecends=2;
            return;
        }
        $(".currentGamePart").find(".bottomText ").removeClass("hidden");
        finTempSecends=Number($(".currentGamePart .bottomText span").html())-1;
        $(".currentGamePart .bottomText span").html( finTempSecends);
        timeoutId2 = setTimeout(countdown, 1000);
    }
    timeoutId2 = setTimeout(countdown, 1000);
}

function switchGamePart(){

    if(end==true){
        //跳转 结算页面：
        console.log(score);
        return;
    }

    var currentEle= $(".currentGamePart");
    var id= currentEle.next().find("canvas")[0].id;
    if(id=="myCanvas3"){

       end=true;
    }

    currentEle.removeClass("currentGamePart").addClass("hidden");
    currentEle.next().addClass("currentGamePart").removeClass("hidden");

    canvas(id);

}