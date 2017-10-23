var s = 0;
var rval = window.setInterval(changeHrWidth, 10);

function changeHrWidth() {
  var rhr = document.getElementById("right-hr");
  var lhr = document.getElementById("left-hr");
  if (s == 400) {
    clearInterval(rval);
  } else {
    s = s + 2;
    rhr.style.width = s + "px";
    lhr.style.width = s + "px";
  }
}
var obj = document.getElementById("welcome-h2");
var flag = true;

function show(obj) {
  var num = 0;
  if (flag) {
    var st = setInterval(fadeIn, 20);

    function fadeIn() {
      obj.style.opacity = num / 10;
      if (num >= 10) {
        clearInterval(st);
      }
      num = num + 0.1;
    }
  }
}
show(obj);

// 画时钟
var clock = document.getElementById("myClock");
var ctx = clock.getContext("2d"); //获取一个2维画布
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var scale = width / 200;
clock.style.borderRadius = 100 * scale + "px";

function drawClock() {
  ctx.save(); //保存当前环境的状态
  //画外圆
  ctx.translate(r, r); //转换原点
  ctx.beginPath(); //路径开始
  ctx.lineWidth = 10 * scale; //路径宽度
  ctx.arc(0, 0, r - 5 * scale, 0, 2 * Math.PI, false); //画路径，arc(x, y, r, brad, erad, 顺时针画)
  ctx.stroke(); //绘制无填充，与fill()相反

  //画钟点数
  var hourNum = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]; //从0弧度开始画，也就是3开始
  ctx.font = 18 * scale + "px Arial"; //设置字体
  ctx.textAlign = "center"; //左右居中
  ctx.textBaseline = "middle"; //上下居中
  hourNum.forEach(function(number, i) { //遍历数组
    var rad = 2 * Math.PI / 12 * i; //得出每个钟点数对应所在的弧度
    var x = Math.cos(rad) * (r - 30 * scale); //得出每个钟点数的x坐标
    var y = Math.sin(rad) * (r - 30 * scale); //y坐标

    ctx.fillText(number, x, y); //填充数字
  });
  //画钟点
  for (var i = 0; i < 60; i++) {
    var rad = 2 * Math.PI / 60 * i;
    var x = Math.cos(rad) * (r - 18 * scale);
    var y = Math.sin(rad) * (r - 18 * scale);
    ctx.beginPath();
    if (i % 5 === 0) {
      ctx.fillStyle = "#000";
      ctx.arc(x, y, 2 * scale, 0, 2 * Math.PI, false); //黑色实心点
    } else {
      ctx.fillStyle = "#ccc";
      ctx.arc(x, y, 2 * scale, 0, 2 * Math.PI, false); //灰色实心点
    }
    ctx.fill();
  }
}

function drawHour(hour, minute) {
  ctx.save(); //保存当前环境的状态
  ctx.beginPath();
  var hrad = 2 * Math.PI / 12 * hour;
  var mard = 2 * Math.PI / 12 / 60 * minute;
  ctx.rotate(hrad + mard);
  ctx.lineWidth = "6";
  ctx.lineCap = "round";
  ctx.moveTo(0, 10 * scale);
  ctx.lineTo(0, -r / 2 + 5 * scale);
  ctx.stroke();
  ctx.restore(); //返回之前保存过的路径状态和属性
}

function drawMinute(minute, second) {
  ctx.save();
  ctx.beginPath();
  var mrad = 2 * Math.PI / 60 * minute;
  var srad = 2 * Math.PI / 60 / 60 * second;
  ctx.rotate(mrad + srad);
  ctx.lineWidth = "3";
  ctx.lineCap = "round";
  ctx.moveTo(0, 10 * scale);
  ctx.lineTo(0, -r + 40 * scale);
  ctx.stroke();
  ctx.restore();
}

function drawSecond(second) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1 * scale;
  ctx.fillStyle = "red"
  var rad = 2 * Math.PI / 60 * second;
  ctx.rotate(rad);
  // ctx.lineCap="round";
  ctx.moveTo(-2 * scale, 20 * scale);
  ctx.lineTo(2 * scale, 20 * scale);
  ctx.lineTo(1, -r + 20 * scale);
  ctx.lineTo(-1, -r + 20 * scale);
  ctx.lineTo(-2 * scale, 20 * scale);
  // ctx.lineTo(-2, 20);
  // ctx.lineTo(0, -r + 18);
  ctx.fill();
  ctx.restore();
}

function drawAxis() {
  ctx.beginPath();
  ctx.fillStyle = "#fff"
  ctx.arc(0, 0, 3 * scale, 0, 2 * Math.PI, false);
  ctx.fill();
}



function draw() {
  ctx.clearRect(0, 0, width, height); //在给定的矩形内清除指定的像素
  var date = new Date(); //获取当前时间
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  drawClock();
  drawHour(hour, minute);
  drawMinute(minute, second);
  drawSecond(second);
  drawAxis();
  ctx.restore(); //返回之前保存过的路径状态和属性
}

draw();
setInterval(draw, 1000);
