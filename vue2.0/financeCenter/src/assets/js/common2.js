var baseURI = 'http://reimbursement.ehaofangwang.com';  //测试

var clouddnImgStr = 'http://oitvtdaml.bkt.clouddn.com'; //上传图片返回拼接域名

var imgUrl = 'http://www.ehaofangwang.com/publicshow/qiniuUtil/fileToQiniu'; //图片上传请求url-测试
// var imgUrl = 'http://www.ehaofang.com:8888/publicshow/qiniuUtil/fileToQiniu'; //图片上传请求url-正式

function cutData(num) {
	var Num = parseInt(num);
	num = num + '';
	if (num.length >= 9) {
		return (Num / 100000000) + "亿"
	} else if (num.length <= 4) {
		return Num + "元"
	} else {
		return (Num / 10000) + "万"
	}
};

$(function() {
	document.onclick = function(e) {
		$("#mine_menu").hide();
	};
	$('.mine').on("click", function(e) {
		$("#mine_menu").toggle();
		e = e || event;
		stopFunc(e);
	});
	$('#mine_menu').on("click", function(e) {
		e = e || event;
		stopFunc(e);
	});

	function stopFunc(e) {
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
	};

	$(".prokf").hover(function() {
		$(".prokf div").show();
	}, function() {
		$(".prokf div").hide();

	});
	$("#Add-property").on("click", function() {
		window.location.href = dataUrl + "pro-edit.html"
	});
	$("#add-land").on("click", function() {
		window.location.href = dataUrl + "land-edit.html"
	});
	$("#list-model").on("click", function() {
		window.location.href = dataUrl + "index.html"
	});
	$("#map-model").on("click", function() {
		window.location.href = dataUrl + "propertyMap.html"
	})

	function getCookie(key) {
		var str = document.cookie;
		var arr = str.split("; ");
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split("=");
			if (key == arr2[0]) {
				return arr2[1]
			}
		}
		return "";
	}

})