var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

var pieces = [
{p:[{x:0, y:0}, {x:400, y:400}, {x:0, y:800}], color:'#FF0000'},
{p:[{x:0, y:0}, {x:400, y:400}, {x:800, y:0}], color:'#FFE32C'},
{p:[{x:0, y:800}, {x:200, y:600}, {x:400, y:800}], color:'#21D4FD'},
{p:[{x:400, y:800}, {x:800, y:400}, {x:800, y:800}], color:'#FAACA8'},
{p:[{x:400, y:400}, {x:600, y:600}, {x:400, y:800}, {x:200, y:600}], color:'#08AEEA'},
{p:[{x:400, y:400}, {x:600, y:600}, {x:600, y:200}], color:'#FA709A'},
{p:[{x:600, y:600}, {x:600, y:200}, {x:800, y:0}, {x:800, y:400}], color:'#2AF598'},

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

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(400, 400);
// ctx.lineTo(0, 800);
// ctx.closePath();
// ctx.fillStyle = '#005588';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(800, 0);
// ctx.lineTo(400, 400);
// ctx.closePath();
// ctx.fillStyle='#F94325';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(0, 800);
// ctx.lineTo(400, 800);
// ctx.lineTo(200, 600);
// ctx.closePath();
// ctx.fillStyle='#F94325';
// ctx.fill();
