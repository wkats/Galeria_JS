var imgShow;
	var prevImgs;
	$(document).ready(init());
	function init(){
		imgShow = $("#dSlider .dImgShow img");		
		imgShow.attr('src', 'img/02.jpg');	
		prevImgs = $("#dSlider .dPreview ul li img")
		prevImgs.click(function(event) {
			prevClick($(this));
		});
	}
	function prevClick(imgObject){
		//console.log(imgObject);		
		var str = imgObject.attr('src');
		console.log(imgObject.attr('src'));
		imgShow.attr("src", imgObject.attr("src"));
	}