/**
 * Created by Think on 2015/10/23.
 */
;(function(){
    var head = window.top.document.querySelector('head');
    var link = document.createElement('link');
    link.href = "../maincss/warning.css";
    link.rel = 'stylesheet';
    link.type = 'text/css';
   
    head.appendChild(link);
	
	
    $.extend({
        "jWfxWarning":function(value,title,func) {
        	try{
        		 $(window.top.document.querySelector("#jWfxWarningPanel")).remove();
        		 $(window.top.document.querySelector("#jWfxWarningShadow")).remove();
	   		}catch(ee){
	   			
	   		}
	   		
	   		//$(window.top.document.querySelector("head")).append($text);
           var $text = $("<div id='jWfxWarningPanel' class='panel panel-default'> " +
                "<div class='panel-heading'>"+title+"</div> <div class='panel-body'> " +
                "<div id='jWfxWarningText' class='jWfxWariningTextStyle '>"+value+"</div> " +
                "</div> " +
                "<div id='jWfxWarningBtn' class='jWfxWariningBtnStyle btn btn-default'>ok</div>" +
                " </div>"+
                "<div id='jWfxWarningShadow'></div>");
            $(window.top.document.querySelector("body")).append($text);
            $(window.top.document).find("#jWfxWarningPanel").css("margin-top",-$(window.top.document).find("#jWfxWarningPanel").height()/2+"px");
            $(window.top.document.querySelector("#jWfxWarningBtn")).click(function () {
                //$("#jWfxWarningPanel").addClass("hidden");
                //$("#jWfxWarningShadow").addClass("hidden");
                if(func!=null){
                    func();
                }
             
            $(window.top.document.querySelector("#jWfxWarningPanel")).remove();
            $(window.top.document.querySelector("#jWfxWarningShadow")).remove();
            });
        }
    });

})(jQuery);
