var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//var PI = 3.1415926535897932384626;

var x1 = 0;
var y1 = 0;
var radius1 = 200;
var angle1 = Math.PI*3/2;
var divisor1 = 40;

var x2 = 0;
var y2 = 0;
var radius2 = 150;
var angle2 = Math.PI*3/2;
var divisor2 = 15;

var interval;
var time;

var centerX = 360;
var centerY = 360;

var rad1Slider = document.getElementById('rad1Range');
var rad1Value = document.getElementById('rad1Value');

var rad2Slider = document.getElementById('rad2Range');
var rad2Value = document.getElementById('rad2Value');

var div1Slider = document.getElementById('div1Range');
var div1Value = document.getElementById('div1Value');

var div2Slider = document.getElementById('div2Range');
var div2Value = document.getElementById('div2Value');

var speedDivSlider = document.getElementById('speedDivRange');
var speedDivValue = document.getElementById('speedDivValue');

rad1Value.innerHTML = rad1Slider.value;
rad2Value.innerHTML = rad2Slider.value;
div1Value.innerHTML = div1Slider.value;
div2Value.innerHTML = div2Slider.value;
speedDivValue.innerHTML = speedDivSlider.value;

function resetScreen() {
	angle1 = 0;
	angle2 = 0;
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	main();
}

rad1Slider.oninput = function() {
	rad1Value.innerHTML = this.value;
	radius1 = this.value;
	resetScreen();
}
rad2Slider.oninput = function() {
	rad2Value.innerHTML = this.value;
	radius2 = this.value;
	resetScreen();
}
div1Slider.oninput = function() {
	div1Value.innerHTML = this.value;
	divisor1 = this.value;
	resetScreen();
}
div2Slider.oninput = function() {
	div2Value.innerHTML = this.value;
	divisor2 = this.value;
	resetScreen();
}
speedDivSlider.oninput = function() {
	speedDivValue.innerHTML = this.value;
	speedDivisor = this.value;
	resetScreen();
	main();
}
function main() {
	clearInterval();
	interval = setInterval(function(){
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius1, 0, 2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius2, 0, 2*Math.PI);
	ctx.stroke();
	
	angle1 += (2*Math.PI)/divisor1;
	angle2 += (2*Math.PI)/divisor2;
	
	x1 = centerX+(radius1*Math.cos(angle1));
	y1 = centerY+(radius1*Math.sin(angle1));
	x2 = centerX+(radius2*Math.cos(angle2));
	y2 = centerY+(radius2*Math.sin(angle2));
	
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	}, time);
}

main();