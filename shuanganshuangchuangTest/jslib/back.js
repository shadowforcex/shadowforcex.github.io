/**
 * Created by shadowforce on 2017/6/9.
 */

document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});

$(document).ready(function(){
    $(".footerBtn").click(function(){
        window.location.href="../step2.html"+ window.location.hash;
    })


    addMusic();
    $(window).on('touchstart', function (e) {


        $("#audio")[0].play();


    });
});

function addMusic(){
    var audio = document.createElement('audio');
    audio.id="audio";
    audio.controls = "controls";
    audio.loop="loop";
    audio.preload="auto";
    audio.src = '../bgm/bgm.mp3' ;
    console.log(audio);
    document.body.appendChild(audio)  ;
    var audioEle = document.getElementById("audio");
    audioEle.play();
    $("#audio").addClass("hidden");
}