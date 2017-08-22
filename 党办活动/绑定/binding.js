/**
 * Created by shadowforce on 2017/8/21.
 */
$(document).ready(function(){

    $("input").focus(function(){

            $(".bottomText").css("position","static");



    })


    $("input").blur(function(){



        $(".bottomText").css("position","absolute");

    })

})