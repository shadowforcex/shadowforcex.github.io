$(document).ready(function () {
    init();
});

function init(){
    $(".arrow").click(clickListener);
    $(".arrow2").click(clickListener);
}

function clickListener(e){

    if($(e.currentTarget).hasClass("arrow")){

        arrowClick();
    }
    if($(e.currentTarget).hasClass("arrow2")){
        arrowClick2();
    }
    
}

function arrowClick(){
    console.log(3)
    $(".section1").animate({top:"-100%"},500);
    $(".section2").animate({top:"0%"},500);
}

function   arrowClick2(){
    $(".section1").animate({top:"0"},500)
    $(".section2").animate({top:"100%"},500)
}