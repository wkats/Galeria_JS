var imgShow;
var prevImgs;
var temporizador;
var coso=0;
var incremento = 50;
$(document).ready(init());
	
function init(){
	imgShow = $("#dSlider .dImgShow img");		
	imgShow.attr('src', 'img/02.gif');	
	prevImgs = $("#dSlider .dPreview ul li img")
	prevImgs.click(function(event) {
		prevClick($(this));
	});

	temporizador = setInterval(movimiento,1500);
}

function prevClick(imgObject){
	console.log(imgObject);			
	var str = imgObject.attr('src');
	console.log(imgObject.attr('src'));
	imgShow.attr("src", imgObject.attr("src"));
}

function movimiento(){
	coso++;
	console.log("tick "+coso);
	if((coso%4)==0){
		$("#dSlider .dPreview ul").css('margin-left',incremento*10);
	}
}