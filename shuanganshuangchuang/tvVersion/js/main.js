function getEndPage(){
    $('.endpage').fadeIn();
}

$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    var tap = mobile ? "tap" : "click";

    var Android=true;
    if (/(Android)/i.test(navigator.userAgent)) Android=true;

    var bgsound=document.getElementById('bgsound');
    var stageW=$(window).width();
    var stageH=$(window).height();

    // creatJs相关变量；
    var canvas,exportLoading,exportMovie,stage;
    var reading=0;
    var motionObj= new TimelineMax();
    var leftTopArr=[3,7,8,10,13,15,17,20,22,25,26,27];

    for(var m=1;m<28;m++){
        eval('var sco'+m);
    }

    init();

    function init() {

        initBtn();
        $('#bgsound')[0].play();

        canvas = document.getElementById("canvas");
        $('#canvas').attr('width',640);
        $('#canvas').attr('height',7845);
        images = images||{};
        ss = ss||{};
        var ccloader = new createjs.LoadQueue(false);
        ccloader.addEventListener("fileload", cchandleFileLoad);
        ccloader.addEventListener("complete", cchandleComplete);
        ccloader.setMaxConnections(5);
        ccloader.loadFile({src:"images/loading_atlas_.json", type:"spritesheet", id:"loading_atlas_"}, true);

        if(!Android){
            ccloader.loadFile({src:"images/movie_atlas_.json", type:"spritesheet", id:"movie_atlas_"}, true);
            ccloader.loadFile({src:"images/movie_atlas_2.json", type:"spritesheet", id:"movie_atlas_2"}, true);
            ccloader.loadFile({src:"images/movie_atlas_3.json", type:"spritesheet", id:"movie_atlas_3"}, true);
            ccloader.loadFile({src:"images/movie_atlas_4.json", type:"spritesheet", id:"movie_atlas_4"}, true);
            ccloader.loadFile({src:"images/movie_atlas_5.json", type:"spritesheet", id:"movie_atlas_5"}, true);
        }

    }

    function cchandleFileLoad(evt) {
        var queue = evt.target;
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
        ss[evt.item.id] = queue.getResult(evt.item.id);

        if(evt.item.id=='loading_atlas_'){
            exportLoading = new lib_loading.loading();
            exportLoading.x=(stageW-640)/2;
            exportLoading.y=(stageH-1040)/2;

            stage = new createjs.Stage(canvas);

            if (createjs.Touch.isSupported() ) {
                createjs.Touch.enable(stage);
            }

            stage.addChild(exportLoading);
            stage.update();
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", stage);
            queue.addEventListener("progress", handleOverallProgress);
        }

    }

    function handleOverallProgress(event){
        exportLoading.load_txt.text=Math.ceil(event.loaded*100)+"%";
    }

    function cchandleComplete(evt) {
        if(Android){
            $('#canvas').remove();
            initPageMotion();
        }else{
            exportLoading.play();
            exportMovie = new lib_movie.movie();

            if (createjs.Touch.isSupported() ) {
                createjs.Touch.enable(stage);
            }

            exportLoading.load_btn.addEventListener('click',loadBtnClick);
            exportMovie.x=(stageW-640)/2;
            exportMovie.y=0;
            //exportMovie.y=970;
            stage.addChildAt(exportMovie,0);
            exportMovie.visible=true;

            //loadBtnClick();
        }
    }

    function loadBtnClick(){
        $('.page').css('overflow','auto');
        $('.slidediv').show();
        $('#bgsound')[0].play();
        $('.topic').show();
        $('#canvas').css('top','970px');
        //createjs.Tween.get(exportLoading).to({y:-1040}, 800).call(getScence);
        getScence();
    }
    function initPageMotion(){
        motionObj.add(TweenMax.from('.p1_1', .5, {alpha:0, y:10, delay:.5, ease:Expo.easeOut}));
        motionObj.add(TweenMax.from('.p1_2', .5, {alpha:0, y:10, ease:Expo.easeOut}),'-=.3');
        motionObj.add(TweenMax.from('.p1_3', .5, {alpha:0, y:10, ease:Expo.easeOut}),'-=.3');
        motionObj.add(TweenMax.from('.p1_4', .5, {alpha:0, y:10, ease:Expo.easeOut}),'-=.3');
        motionObj.add(TweenMax.from('.p1_5', .5, {alpha:0, y:10, ease:Expo.easeOut}),'-=.3');
        motionObj.add(TweenMax.from('.p1_6', .5, {alpha:0, y:10, ease:Expo.easeOut}),'-=.3');
        motionObj.pause();
        $(".p1").fadeIn(500,function(){
            motionObj.play();
        });
    }
    function getScence(){
        if(!Android){
            stage.removeChildAt(1);
            exportLoading = null;
        }
        for(var m=1;m<28;m++){
            if(Android){
                $('.btnpos').before('<div class="btns btn'+m+'"><div><img src="images/arrow_show.png"></div></div>');
                var result = $.inArray(m, leftTopArr);
                if(result>=0){
                    $(".btn"+m+">div").addClass('left_top');
                }else{
                    $(".btn"+m+">div").addClass('right_top');
                }
            }else{
                $('.btnpos').before('<div class="btns btn'+m+'"></div>');
            }
            $('.btn'+m).on(tap,function(){
            	$(".showbox").hide();
                reading=this.className.substr(8);
                $('.box'+reading).fadeIn();

                if(Android){
                    $(".btn"+reading+" img").attr('src','images/arrow_hide.png');
                    $(".btn"+reading+">div").removeClass('left_top right_top');
                }else{
                    eval('exportMovie.jt'+reading+'.gotoAndStop(20)');
                }
            });

            $('.poppos').before('<div id="box'+m+'" class="showbox hide box'+m+'"><img src="images/txt'+m+'.png"><div class="boxClose"></div><div class="showMore"></div></div>');
        }
        initBtn();
    }

    function initBtn(){

        $('.p1_6').on(touchstart,function(){
            $('.pmain').css('background','url("images/bg_01.jpg") 0 0 no-repeat,url("images/bg_02.jpg") 0px 946px no-repeat,url("images/bg_03.jpg") 0px 1891px no-repeat,url("images/bg_04.jpg") 0px 2837px no-repeat,url("images/bg_05.jpg") 0px 3782px no-repeat,url("images/bg_06.jpg") 0px 4728px no-repeat,url("images/bg_07.jpg") 0px 5673px no-repeat,url("images/bg_08.jpg") 0px 6619px no-repeat').show();
            $('.p1').fadeOut();
            $('.page').css('overflow','auto');
            $('.slidediv').show();
            $('#bgsound')[0].play();
            $('.topic').show();
            getScence();
        });

        $('.showMore').on(tap,function(){
            $('.cont'+reading).fadeIn();
            if( (reading>5 && reading<10) || (reading>10 && reading<13) || (reading>13 && reading<18) || reading==20 || (reading>21 && reading<24)){  //树会修改
                if(eval('sco'+reading)==null){
                    eval('sco'+reading+'=new IScroll("#wpr"+reading, { scrollX: true, freeScroll: true,scrollbars:false})');
                }
            }
        });

        $('.boxClose').on(tap,function(){
            $('.showbox,.conter').fadeOut();
            reading=0;
        });

        $('.closeDetail').on(tap,function(){
            $('.conter').fadeOut();
        });

//      $('.shareBtn').on(tap,function(){
//          $('.share').fadeIn(function(){
//              $('.share').on(tap,function(){
//                  $(this).fadeOut().off(tap);
//              });
//          });
//      });


    }

});