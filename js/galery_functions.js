var imgShow;
var prevImgs;
var temporizador;
var incremento = 50;
$(document).ready(init());
	
function init(){
	imgShow = $("#dSlider .dImgShow img");		
	imgShow.attr('src', 'img/02.gif');	
	prevImgs = $("#dSlider .dPreview ul li img")
	prevImgs.click(function(event) {
		prevClick($(this));
	});
	var coso = $("#dSlider .dPreview ul");	
	temporizador = setInterval(function(){movimiento(coso);},1000);
	//temporizador = setInterval(movimiento,1500);
}

function prevClick(imgObject){
	console.log(imgObject);			
	var str = imgObject.attr('src');
	console.log(imgObject.attr('src'));
	imgShow.attr("src", imgObject.attr("src"));
}

function movimiento(_ul){	
	_ul.animate({"margin-left":"+=50"},1000);	
