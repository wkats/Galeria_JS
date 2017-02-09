var debug = true;
var dPreview;
var imgShow;
var prevImgs;
var temporizador;
var incremento = 50;
$(document).ready(init());
	
function init(){
	if(debug){
		console.log("Debugging... Hello World");
	}
	dPreview = $("#dSlider .dPreview");	
	imgShow = $("#dSlider .dImgShow img");		
	imgShow.attr('src', 'img/00.png');	

	prevImgs = dPreview.find('ul li img')
	prevImgs.click(function(event) {
		prevClick($(this));
	});

/*
	var coso = $("#dSlider .dPreview ul");	
	console.log(coso);
	//temporizador = setInterval(function(){movimiento(coso);},1000);
	//temporizador = setInterval(movimiento,1500);
	*/
}

function prevClick(imgObject){
	if(debug){
		console.log(imgObject);				
		console.log(imgObject.attr('src'));		
	}
	imgShow.attr("src", imgObject.attr("src"));
}

function movimiento(_ul){			
	_ul.animate({"margin-left":"+=50"},1000);	
}