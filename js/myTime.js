var W = 1024;
var H = 768;
var R = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2017, 11, 1, 17, 30, 0);

var curShowTimeSeconds = 0;

window.onload = function(){
	var canvas = document.getElementById('myTime');
	var context = canvas.getContext('2d');

	canvas.width = W;
	canvas.height = H;

	curShowTimeSeconds = getCurShowTime();
	drawTime(context);
	setInterval(function(){
		drawTime(context);
		update();
	}, 1000);	
}

function update(){
	var nextShowTimeSeconds = getCurShowTime();

	var nHour = parseInt(nextShowTimeSeconds / 3600);
	var nMinute = parseInt((nextShowTimeSeconds - hour * 3600) / 60);
	var nSecond = nextShowTimeSeconds % 60;

	var hour = parseInt(curShowTimeSeconds / 3600);
	var minute = parseInt((curShowTimeSeconds - hour * 3600) / 60);
	var second = curShowTimeSeconds % 60;

	if(nSecond != second){
		curShowTimeSeconds = nextShowTimeSeconds;
	}

}

function getCurShowTime(){
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();

	ret = Math.round(ret / 1000);
	return ret >= 0 ? ret : 0;
}

function drawTime(ctx){

	ctx.clearRect(0, 0, W, H);

	var hour = parseInt(curShowTimeSeconds / 3600);
	var minute = parseInt((curShowTimeSeconds - hour * 3600) / 60);
	var second = curShowTimeSeconds % 60;
	// var hour = 11;
	// var minute = 12;
	// var second = 13;

	drawNum(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), ctx);
	drawNum(15 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, parseInt(hour % 10), ctx);
	drawNum(30 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, 10, ctx);
	drawNum(39 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, parseInt(minute / 10), ctx);
	drawNum(54 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, parseInt(minute % 10), ctx);
	drawNum(69 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, 10, ctx);
	drawNum(78 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, parseInt(second / 10), ctx);
	drawNum(93 * (R + 1) + MARGIN_LEFT, MARGIN_TOP, parseInt(second % 10), ctx);
}

function drawNum(x, y, num, ctx){
	ctx.fillStyle = '#3C73FF'

	for(var i = 0; i < digit[num].length; i++){
		for(var j = 0; j < digit[num][i].length; j++){
			if(digit[num][i][j] == 1){

				ctx.beginPath();
				ctx.arc(x + (2 * j + 1) * (R + 1), y + (2 * i + 1) * (R + 1), R, 0, 2 * Math.PI, false);
				ctx.closePath();

				ctx.fill();

			}
		}
	}
}

