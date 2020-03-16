
//grandslams

var ok = 1;

function showAusContent(){
	var div = document.getElementById('grandContent');
	var widthAct =  parseInt(div.offsetWidth);

	if (widthAct < 460){
		widthAct *=  4;
	}
	let newHeight = String(widthAct * 345 / 1230) + "px";
	div.style.height = newHeight;

	if (ok == 1){
		if(div.style.transform == "scaleY(1) scaleX(1)"){
			ok = 0;
			div.style.height = newHeight;
			div.style.transform = "scaleY(0) scaleX(0.5)";
			document.getElementById('arrow-up').style.display = 'none';
			document.getElementById('arrow-down').style.display = 'block';

			setTimeout(function(){
				div.style.height = "0px";
			}, 20);
			setTimeout(function(){  
				ok = 1;
			}, 1300);
		}
		else{
			ok = 0;
			div.style.transform = "scaleY(1) scaleX(1)";
			div.style.height = newHeight;
			document.getElementById('arrow-down').style.display = 'none';
			document.getElementById('arrow-up').style.display = 'block';

			setTimeout(function(){  
				div.style.height = "auto";
				ok = 1;
			}, 1300);
		}  
	}
}

//photos

var slideIndex = 0;
var prevN = 0;
var photo = document.getElementsByClassName("showNextPrev");
var newSrc1 = document.getElementsByClassName("newSrc1");
var newSrc2 = document.getElementsByClassName("newSrc2");
var newSrc3 = document.getElementsByClassName("newSrc3");
var button = document.getElementsByClassName("button");
var photo = document.getElementsByClassName("showNextPrev");

function changeSlide(x){
	var i = 0;
	var source;

	if (x == 1){
		source = newSrc1;
	}
	else if (x == 2){
		source = newSrc2;
	}
	else{
		source = newSrc3;
	}

	for (i = 0; i < photo.length; i++) {
		photo[i].src = source[i].src;
	}
	document.getElementById('mphoto').src = photo[0].src;

	for (i = 0; i < button.length; i++) {
		button[i].className = button[i].className.replace(" activeTop", "");
	}
	photo[slideIndex].className = photo[slideIndex].className.replace(" active", "");
	photo[0].className += " active";
	button[x - 1].className += " activeTop";
	
	slideIndex = 0;
}

function prevNext(n) {
	showSlides(slideIndex += n);
}

function showSlides(n){
	var i=0;
	document.getElementById("mphoto").style.transform = "scaleX(0)";

	setTimeout(function(){  
		if (n > photo.length - 1) {n = 0}
		if (n < 0) {n = photo.length - 1}

		photo[prevN].className = photo[prevN].className.replace(" active", "");
		document.getElementById('mphoto').src = photo[n].src;
		document.getElementById("mphoto").style.transform = "scaleX(1)";
		photo[n].className += " active";
		slideIndex = n;
		prevN = n;
	}, 500);
}