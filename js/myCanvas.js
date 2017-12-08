var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var pieces = [
{p:[{x:0, y:0}, {x:400, y:400}, {x:0, y:800}], color:'#FF0000'},
{p:[{x:0, y:0}, {x:400, y:400}, {x:800, y:0}], color:'#FFE32C'},
{p:[{x:0, y:800}, {x:200, y:600}, {x:400, y:800}], color:'#21D4FD'},
{p:[{x:400, y:800}, {x:800, y:400}, {x:800, y:800}], color:'#FAACA8'},
{p:[{x:400, y:400}, {x:600, y:600}, {x:400, y:800}, {x:200, y:600}], color:'#08AEEA'},
{p:[{x:400, y:400}, {x:600, y:600}, {x:600, y:200}], color:'#FA709A'},
{p:[{x:600, y:600}, {x:600, y:200}, {x:800, y:0}, {x:800, y:400}], color:'#2AF598'}
];
function draw(pieces, ctx){
	for(var i = 0 ; i < pieces.length ; i++){
		ctx.beginPath();
		ctx.moveTo(pieces[i].p[0].x, pieces[i].p[0].y);
		for(var j = 1 ; j < pieces[i].p.length ; j++){
			ctx.lineTo(pieces[i].p[j].x, pieces[i].p[j].y);
		}
		ctx.closePath();
		ctx.fillStyle = pieces[i].color;
		ctx.fill();
	}
}
draw(pieces, ctx);


var canvas1 = document.getElementById('myCanvas1');
var ctx1 = canvas1.getContext('2d');
var pieces1 = [
{p:{x:-200, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-200, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-180, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-180, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-160, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-160, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-140, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-140, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-120, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-120, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-100, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-100, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-80, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-80, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-60, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-60, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-40, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-40, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:-20, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#2CE3FF'},
{p:{x:0, y:-20, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#B42CFF'},
{p:{x:0, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:20, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:20, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:40, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:40, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:60, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:60, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:80, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:80, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:100, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:100, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:120, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:120, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:140, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:140, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:160, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:160, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:180, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:180, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'},
{p:{x:0, y:200, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#48FF33'},
{p:{x:200, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFE32C'}
];
function draw1(pieces, ctx){
	ctx.translate(400, 400);
	for(var i = 0 ; i < pieces.length ; i++){
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.arc(pieces[i].p.x, pieces[i].p.y, pieces[i].p.r, pieces[i].p.brad, pieces[i].p.erad, pieces[i].p.val);
		ctx.strokeStyle = pieces[i].color;
		ctx.stroke();
	}
}
draw1(pieces1, ctx1);


var canvas2 = document.getElementById('myCanvas2');
var ctx2 = canvas2.getContext('2d');
var pieces2 = [
{p:{x:0, y:0, r:200, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:0, y:0, r:200, brad:127 * Math.PI / 64, erad:201 * Math.PI / 128, val:true}, color:'#000000'},
{p:{x:0, y:0, r:200, brad:65 * Math.PI / 64, erad:183 * Math.PI / 128, val:false}, color:'#000000'},
{p:{x:0, y:0, r:200, brad:7 * Math.PI / 4, erad:5 * Math.PI / 4, val:true}, color:'#000000'},
{p:{x:0, y:-148, r:10, brad:1 * Math.PI / 4, erad:3 * Math.PI / 4, val:true}, color:'#FFFFFF'},
{p:{x:-(200 * Math.cos(Math.PI / 8)) + 60, y:-(200 * Math.sin(Math.PI / 8)) - 30, r:120, brad:111 * Math.PI / 64, erad:23 * Math.PI / 32, val:false}, color:'#000000'},
{p:{x:-70, y:-80, r:50, brad:0 * Math.PI, erad:1 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:(200 * Math.cos(Math.PI / 8)) - 60, y:-(200 * Math.sin(Math.PI / 8)) - 30, r:120, brad:9 * Math.PI / 32, erad:81 * Math.PI / 64, val:false}, color:'#000000'},
{p:{x:70, y:-80, r:50, brad:0 * Math.PI, erad:1 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:-30, y:-120, r:12, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:30, y:-120, r:12, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:-50, y:-40, r:6, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#000000'},
{p:{x:50, y:-40, r:6, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#000000'},
{p:{x:0, y:50, r:20, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#000000'},
{p:{x:-10, y:45, r:5, brad:0 * Math.PI, erad:2 * Math.PI, val:false}, color:'#FFFFFF'},
{p:{x:10, y:170, r:18, brad:15 * Math.PI / 8, erad:9 * Math.PI / 8, val:true}, color:'#FFFFFF'}
];



function draw2(pieces, ctx){
	ctx.save();
	ctx.translate(400, 400);
	for(var i = 0 ; i < pieces.length ; i++){
		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(pieces[i].p.x, pieces[i].p.y, pieces[i].p.r, pieces[i].p.brad, pieces[i].p.erad, pieces[i].p.val);
		// ctx.closePath();
		ctx.strokeStyle = '#000000';
		ctx.stroke();
		ctx.fillStyle = pieces2[i].color;
		ctx.fill();
		ctx.restore();
	}
	ctx2.save();
	ctx2.beginPath();
	ctx2.lineWidth = 20;
	ctx2.lineJoin = 'round';
	ctx2.moveTo(-(200 * Math.cos(Math.PI / 6)), -(200 * Math.sin(Math.PI / 6)));
	ctx2.lineTo(-200, -200);
	ctx2.lineTo(-(200 * Math.sin(Math.PI / 6)), -(200 * Math.cos(Math.PI / 6)));
	ctx2.closePath();
	ctx2.moveTo(200 * Math.cos(Math.PI / 6), -(200 * Math.sin(Math.PI / 6)));
	ctx2.lineTo(200, -200);
	ctx2.lineTo(200 * Math.sin(Math.PI / 6), -(200 * Math.cos(Math.PI / 6)));
	ctx2.closePath()
	ctx2.fillStyle = '#000000';
	ctx2.fill();
	ctx2.strokeStyle = '#000000';
	ctx2.stroke();
	ctx2.restore();

	ctx2.save();
	ctx2.beginPath();
	ctx2.lineWidth = 1;
	ctx2.lineJoin = 'round';
	ctx2.moveTo(-(200 * Math.cos(5 * Math.PI / 24)), -(200 * Math.sin(5 * Math.PI / 24)));
	ctx2.lineTo(-170, -170);
	ctx2.lineTo(-(200 * Math.sin(5 * Math.PI / 24)), -(200 * Math.cos(5 * Math.PI / 24)));
	ctx2.closePath();
	ctx2.moveTo(200 * Math.cos(5 * Math.PI / 24), -(200 * Math.sin(5 * Math.PI / 24)));
	ctx2.lineTo(170, -170);
	ctx2.lineTo(200 * Math.sin(5 * Math.PI / 24), -(200 * Math.cos(5 * Math.PI / 24)));
	ctx2.closePath();
	ctx2.fillStyle = '#FFFFFF';
	ctx2.fill();
	ctx2.strokeStyle = '#000000';
	ctx2.stroke();
	ctx2.restore();
	ctx.restore();
}
draw2(pieces2, ctx2);


// ctx2.save();
// ctx2.beginPath();
// ctx2.lineWidth = 1;
// ctx2.moveTo(0, 400);
// ctx2.lineTo(800, 400);
// ctx2.moveTo(0, 300);
// ctx2.lineTo(800, 300);
// ctx2.moveTo(400, 0);
// ctx2.lineTo(400, 800);
// ctx2.moveTo(0, 0);
// ctx2.lineTo(800, 800);
// ctx2.moveTo(0, 800);
// ctx2.lineTo(800, 0);
// ctx2.strokeStyle = '#FF0000'
// ctx2.stroke();
// ctx2.restore();