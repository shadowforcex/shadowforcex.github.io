/**
 * Created by shadowforce on 2017/1/19.
 */


var page5={
    "dateMemo":"",
    dateMessage:{ //测试数据可删
        date:"2017.1.3",
        forSelect:[
            1,2,3,5
        ],
        unabled:[
            6,30
        ],
        optionalTime:[
            "12:00-13:00",
            "22:00-23:00"
        ]
    }
}
$(document).ready(function(){
    init();
});



function init(){

    buildCalendar(new Date(page5.dateMessage.date));

    //
    $(".preBtn").click(prev);
    $(".nextBtn").click(next);
    var fontSize=Number($("html").css("font-size").replace("px",""));
    $(".dayStyle").height($(".dayStyle").width()-fontSize*1);

    $(".detail").click(detailPartShowHide)
    $(".bottomPart div").css("line-height", $(".bottomPart").height()+"px");
    //ajax获取数据之后调用这段
    setDateType(page5.dateMessage);

}

//
function buildCalendar(date){

    clean();
    page5.dateMemo=date;

    var dayCount=getCountOfDay(date);

    var monthFirstDate=new Date(date.getFullYear(),date.getMonth());

    var monthFirstDay=monthFirstDate.getDay();

var tempDate=1;
    var list=$(".week1 .dayStyle");
    for(var i=monthFirstDay;i<list.length;i++){
        list.eq(i).find("span").html(tempDate);
        tempDate++;
    }
    list=$(".week2 .dayStyle")
    for(var i=0;i<list.length;i++){
        list.eq(i).find("span").html(tempDate);
        tempDate++;
    }
    list=$(".week3 .dayStyle")
    for(var i=0;i<list.length;i++){
        list.eq(i).find("span").html(tempDate);
        tempDate++;
    }
    list=$(".week4 .dayStyle")
    for(var i=0;i<list.length;i++){
        list.eq(i).find("span").html(tempDate);
        tempDate++;
    }
    list=$(".week5 .dayStyle")
    for(var i=0;i<list.length;i++){
        if(tempDate<=dayCount){

            list.eq(i).find("span").html(tempDate);
            tempDate++;
        }
    }
    list=$(".week6 .dayStyle");
    for(var i=0;i<list.length;i++){

        if(tempDate<=dayCount){
            $(".week6").removeClass("hidden");
            //$(".weekEvent6").removeClass("hidden");
            list.eq(i).find("span").html(tempDate);
            tempDate++;
        }

    }
   // $("td.dayStyle").unbind().click(detailShow);
  //  buildEvent();



    //ajax获取数据之后调用这段
    setDateType(page5.dateMessage);
}

function getCountOfDay(date){

//d.getMonth()+1代表下个月，月份索引从0开始，即当前月为6月时，getMonth()返回值为5，创建日期时同理
//此处构造的日期为下个月的第0天，天数索引从1开始，第0天即代表上个月的最后一天
    var curMonthDays = new Date(date.getFullYear(), (date.getMonth()+1), 0).getDate();
    return curMonthDays;
}

function prev(){
    page5.dateMemo=new Date(page5.dateMemo.getFullYear(),page5.dateMemo.getMonth()-1);
    buildCalendar(  page5.dateMemo);
    $(".tempDate").html(page5.dateMemo.getFullYear()+"."+(page5.dateMemo.getMonth()+1));
    panelClean();

}
function next(){
    page5.dateMemo=new Date(page5.dateMemo.getFullYear(),page5.dateMemo.getMonth()+1);
    buildCalendar(  page5.dateMemo);
    $(".tempDate").html(page5.dateMemo.getFullYear()+"."+(page5.dateMemo.getMonth()+1));
    panelClean();

}

function clean(){
    $("td.dayStyle").find("span").html("");
    $("td .eventItem").remove();
    $("td .remarkNum").remove();
    $(".week6").addClass("hidden");
}


function panelClean(){
    var cleanList=$(".panel");
    for(var i=0;i<cleanList.length;i++){
        if(!cleanList.eq(i).hasClass("trTemplate")){
            cleanList.eq(i).remove();
        }
    }
}

function setMid(time){
    try{
        var scrollTop=$(".panel")[1].offsetTop;

        if(!(scrollTop<$(".calendar").height()/2)){
            //  $(".tableOutter")[0].scrollTop= scrollTop;
            $(".tableOutter").eq(0).animate({"scrollTop":scrollTop},time)
        }
    }catch(e){
        console.log("238 click too fast");
    }

}

function setDateType(dateList){
    $(".forSelect").unbind("click");
    $(".forSelect").removeClass("forSelect");
    $(".unabled").removeClass("unabled");
    $(".onSelect").removeClass("onSelect");



    var tempList=dateList["forSelect"];
    for(var i=0;i<tempList.length;i++){

        findDate(  tempList[i],"forSelect");
    }
    tempList=dateList["unabled"];
    for(var i=0;i<tempList.length;i++){
        findDate(  tempList[i],"unabled");
    }

    $(".forSelect").click(selectFun);
}

function findDate(date,selectTypeClass){
 var $list= $(".dayStyle");
    for(var i=0;i<$list.length;i++){
        if( $list.eq(i).find("span").html()==date  ){
            $list.eq(i).addClass(selectTypeClass);
        }
    }

}

function selectFun(e){
    $(".onSelect").removeClass("onSelect");
    $(e.currentTarget).addClass("onSelect");
}

function detailPartShowHide(){
    $(".detailPart").toggleClass("hidden");
}

