
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

 line_width = 10;
 size = 150;

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = line_width;
ctx.arc(400, 300, size ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = line_width;
ctx.arc(800, 300, size ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = line_width;
ctx.arc(1200, 300, size ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = line_width;
ctx.arc(600, 450, size ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = line_width;
ctx.arc(1000, 450, size ,0 , 2*Math.PI);
ctx.stroke();

