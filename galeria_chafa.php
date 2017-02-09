<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>:.Galería.:</title>
	<script
	src="https://code.jquery.com/jquery-3.1.1.min.js"
	integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
	crossorigin="anonymous">			  	
	</script>
	
	<link rel="stylesheet" type="text/css" href="./css/galeria.css">
</head>
<body>

<div id="dSlider">
	<div class="dImgShow">
		<img src="img/00.png" alt="None">
	</div>
	
	<div class="dPreview">
		<ul>
			<li><img src="img/00.png" alt=""></li>
			<li><img src="img/01.jpg" alt=""></li>
			<li><img src="img/02.gif" alt=""></li>
			<li><img src="img/03.jpg" alt=""></li>
			<li><img src="img/04.gif" alt=""></li>
			<li><img src="img/05.jpg" alt=""></li>
			<li><img src="img/06.png" alt=""></li>			
		</ul>
	</div>
</div>
<script type="text/javascript">
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
</script>
</body>
</html>