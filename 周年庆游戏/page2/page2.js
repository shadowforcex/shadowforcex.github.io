/**
 * Created by shadowforce on 2016/7/18.
 */
$(document).ready(function(){
    gameInit();

    $(".clickStyle").click(clickListener);

});
function gameInit(){
    initNum();
    buildNumber();
    animateInit();
}
var placeArray=[];

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
    }else{
        if($(".onSelect").length>=5){
            return;
        }
        $(e.currentTarget).addClass("onSelect");
    }
    calculateShow();
    calculateRes();
}

function playClickSound(){
    if( document.querySelector("#clickSound").ended){
        document.querySelector("#clickSound").play();
    }else{
        document.querySelector("#clickSound").currentTime = 0;
        document.querySelector("#clickSound").play();
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
        alert("success");
    }
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
    animate($(".cPart1"));
    setTimeout(function(){
        animate($(".cPart2"));
        animate($(".cPart4"));
    },200);

    setTimeout(function(){
        animate($(".cPart3"));
        animate($(".cPart5"));
        animate($(".cPart7"));
    },400)

    setTimeout(function(){
        animate($(".cPart6"));
        animate($(".cPart8"));
    },600)

    setTimeout(function(){
        animate($(".cPart9"));
    },800)
}

function animate($ele){
    $ele.addClass("animate");

}