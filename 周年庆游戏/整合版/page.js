/**
 * Created by shadowforce on 2016/7/18.
 */
var placeArray=[];
var beginTime;
var endTime;

$(document).ready(function(){

    $("#page1Btn").click(chagePageListener);

    $(".clickStyle").click(clickListener);

    $(".p3BtnStyle").click(chagePageListener);

    $(".boxShadowShare").click(function(){
        $(".boxShadowShare").addClass("hidden");
        $(".popShareImg").addClass("hidden");
    } );
    $(".popWindowClose").click(function(){
        $(".popWindow").addClass("hidden");
        $(".boxShadow").addClass("hidden");

    });

});
function gameInit(){
    initNum();
    buildNumber();
    animateInit();
    $("#page2 .onSelect").removeClass("onSelect");
    $("#page2 .res").html(0);
    $("#page2 .rLine1").html("");
    placeArray=[];

    beginTime= new Date().getTime();
}

function chagePageListener(e){

    switch(e.currentTarget.id)
    {
        case "page1Btn":
            hiddenPages();
            $("#page2").removeClass("hidden");
            gameInit();
            break;
        case "p3PlayAgainBtn":

            var data={ "name":"微信号" }
            $.ajax({
                type: 'post',
                url: "/api" ,
                data: data ,
                dataType:"json",
                success: function(data){
                   if(data["played"]==true&& data["following"]==false ){
                       $(".popWindowQRCode").removeClass("hidden");
                       $(".boxShadow").removeClass("hidden");
                   }else if(data["leftTimes"]>0){
                       hiddenPages();
                       $("#page2").removeClass("hidden");
                       gameInit()
                   }else if(data["leftTimes"]<=0&&data["share"]==false){
                       $(".popWindowShare").removeClass("hidden");
                       $(".boxShadow").removeClass("hidden");
                   }else if(data["leftTimes"]<=0&&data["share"]==true){
                       $(".popWindowOver").removeClass("hidden");
                       $(".boxShadow").removeClass("hidden");
                       if(data["date"]=="20160810"){
                           $(".popWindowOver .popWindowText").html("你的成绩太棒啦");
                       }
                   }
                       
                },
                error:function (){
                    //alert("net error");
                }
            });
            break;
        case "p3ShareBtn":

            $(".popShareImg").removeClass("hidden");
            $(".boxShadowShare").removeClass("hidden");
            break;


        default:

    }
}
function hiddenPages(){
    $("[id^='page']").addClass("hidden");
}

function buildNumber(){
    var restNum=88;
    var NumberCount= Math.floor(Math.random()*3+3);//3-5随机一个数

    for(var i=0;i<NumberCount-1;i++){
        var currentNumber=Math.floor(Math.random()*(restNum-NumberCount*(NumberCount-i))+1);
        //restNum=restNum-currentNumber;
        restNum-=currentNumber;
        setPlace(currentNumber);
        console.log(currentNumber);//有用
    }
    setPlace(restNum);
    console.log(restNum);//最后一个数

}

function setPlace(num){
    var place=Math.floor(Math.random()*9+1);//1-9随机一个位置
    while(placeArray.indexOf(place)>-1){
        place=Math.floor(Math.random()*9+1);
    }
    $(".cPart"+place+" .back").html(num);
    placeArray.push(place);
}

function clickListener(e){
    if($(e.currentTarget).hasClass("onSelect")){
        $(e.currentTarget).removeClass("onSelect");
        playSound("cencelSound");
    }else{
        if($(".onSelect").length>=5){
            playSound("warnSound");
            return;
        }
        $(e.currentTarget).addClass("onSelect");
        playSound("clickSound");
    }
    calculateShow();
    calculateRes();
}

function playSound(name){
    if( document.querySelector("#"+name).ended){
        document.querySelector("#"+name).play();
    }else{
        document.querySelector("#"+name).currentTime = 0;
        document.querySelector("#"+name).play();
    }
}

function calculateRes(){
    var res=0;
    var $num = $(".onSelect .back");
    for(var i=0;i<$num.length;i++){
       res+= Number($num.eq(i).html());
    }
    $(".res").html(res);
    if(res==88){

        success();
    }
}
function success(){
    endTime= new Date().getTime();
    var totalTime=(endTime-beginTime)/1000;//秒
    $(".p3ResNum").html(Math.ceil(totalTime));
    hiddenPages();
    $("#page3").removeClass("hidden");

    //在数据库保存完整的时间 //需要的话 data 可以自行  stringify
    var data={ "name":"微信号","score":totalTime };
    $.ajax({
        type: 'post',
        url: "/save" ,
        data: data ,
        dataType:"json",
        success: function(data){

        },
        error:function (){
          //  alert("net error");
        }
    });

    fall($("#page3 #p3Inner")[0],30,120,15);
}


var fbi;//记录计时器
var direct=0;//0下降 1上升
var dropTimes=0;//弹几次
var tempBaseHeight;//记录当前最高高度

//ele=元素； sp=调用频率； baseHeight=下落初始高度，baseSpeed=基础速度放大倍率
function fall(ele,sp,baseHight,baseSpeed){

    ele.style.top=-baseHight+1+'px';
    tempBaseHeight=baseHight;
    fbi=setInterval(function(){

    var borkenHeigetStep=2/5;//反弹折损的高度系数
     if( dropTimes==5 ){//弹几次
         ele.style.top=0;
         fbi=clearInterval(fbi);
         showFinalScore();
         return;
     }
     var th=  -Number(ele.style.top.replace("px",""));

     if( th <=0 ){
        // console.log(dropTimes);
         tempBaseHeight=tempBaseHeight*Math.pow(borkenHeigetStep,dropTimes);

         direct=1;
         dropTimes+=1;

         //console.log("----");
     }else if( Math.abs(th)>=tempBaseHeight){//tempBaseHeight*Math.pow(borkenHeigetStep,dropTimes
         direct=0;
         //console.log("----");
     }
     //console.log(tempBaseHeight);
     //console.log(Math.abs(th));
     var v= (Math.sqrt(2*10*Math.abs(tempBaseHeight-Math.abs(th))))*baseSpeed;

   //  console.log(Math.abs(tempBaseHeight-Math.abs(th)));

     //console.log(v);

     if( direct==0 ){
         th-=(v*sp/1000);
     }else{
         th+=(v*sp/1000);
     }
     ele.style.top=-th+'px';
 },sp );

}

function showFinalScore(){
    $(".p3Title").addClass("opacity100");
    $(".p3Res").addClass("opacity100");
    var finalNum=  Number($(".p3Res .p3ResNum").html());

    var step=Math.ceil( finalNum/10);
    $(".p3Res .p3ResNum").html(0);
    fbi=setInterval(function(){
        var tempNum=Number($(".p3Res .p3ResNum").html());
        if(tempNum<finalNum){
            $(".p3Res .p3ResNum").html(  Number($(".p3Res .p3ResNum").html())+step);
        }else{
            fbi=clearInterval(fbi);
            $(".p3Res .p3ResNum").html(finalNum);
        }

    },50);

}

function calculateShow(){
   $(".rLine1").html("");
    var $num = $(".onSelect");
    for(var i=0;i<$num.length;i++){
        if(i==0){
            $(".rLine1").html(  $(".rLine1").html()+$num.eq(i).find(".back").html());
        }else{
            $(".rLine1").html(  ($(".rLine1").html()+"+"+$num.eq(i).find(".back").html()).replace(/\s+/g,''));
        }

    }
}
function initNum(){
    for(var i=1;i<=9;i++){
        $(".cPart"+i+" .back").html(Math.floor(Math.random()*87+1));
    }
}
function animateInit(){
    setTimeout(function(){
        animate($(".cPart1"));
    },200);

    setTimeout(function(){
        animate($(".cPart2"));
        animate($(".cPart4"));
    },400);

    setTimeout(function(){
        animate($(".cPart3"));
        animate($(".cPart5"));
        animate($(".cPart7"));
    },600)

    setTimeout(function(){
        animate($(".cPart6"));
        animate($(".cPart8"));
    },800)

    setTimeout(function(){
        animate($(".cPart9"));
    },1000)
}

function animate($ele){
    $ele.addClass("animate");

}