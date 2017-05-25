/**
 * Created by shadowforce on 2016/7/13.
 */


$(document).ready(function(){

    setInterval(function(){
        animate($('.part1'));

    },3000);

    setTimeout(function(){
        setInterval(function(){
            animate($('.part2'));
        },3000);
    },500);

    setTimeout(function(){
        setInterval(function(){
            animate($('.part3'));
        },3000);
    },1000)


});


function animate( $ele ){
    var id= $ele[0].id.replace("part",'');
    if($ele.hasClass("biggerAnimated"+id)){
        $ele.removeClass("biggerAnimated"+id);
        $ele.addClass("smallerAnimated"+id);
    }else{
        $ele.addClass("biggerAnimated"+id);
        $ele.removeClass("smallerAnimated"+id);
    }
}