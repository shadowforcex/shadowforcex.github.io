var toURL = window.location.href.substring(0,location.href.lastIndexOf('/'));
var wxDefault = {
	title:"“食品安全之旅” 全景图",
	desc:"《上海市食品安全条例》为您的生活带来了什么，我们一探究竟。",
	imgUrl:toURL+"/images/share.jpg",
	link:toURL+"/index.html",
	success:function(){
	}
};

$(function(){
	var pageUrl = location.href;
	$.ajax({
		url:"http://api.hecoe.com/wx/index.php?w=jssdk",
		dataType:"jsonp",
		jsonp:"jsoncallback",
		data:{url:encodeURIComponent(pageUrl)},
		success:function(data){
			data.debug = false;
			wx.config(data);
			wx.ready(function(){
				$('#bgsound')[0].play();
				wxShare();
			});
		}
	})

});

function wxShare(data){
	if(typeof(wx) == "undefined"){
		return;
	}
	var newData = $.extend({},wxDefault, data);
	wx.onMenuShareAppMessage(newData);
	wx.onMenuShareQQ(newData);
	wx.onMenuShareWeibo(newData);
	wx.onMenuShareTimeline({
		title:newData.desc,
		imgUrl:toURL+"/images/share1.jpg",
		link:newData.link,
		success: newData.success
	});
}