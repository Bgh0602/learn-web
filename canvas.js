let vendingMachine = document.getElementById('canvas');
let ctx = vendingMachine.getContext('2d');
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(270, 30)
ctx.moveTo(30, 60);
ctx.lineTo(270, 60);
ctx.moveTo(30, 90);
ctx.lineTo(270, 90);
ctx.rect(200, 95, 40, 5);
ctx.rect(30, 105, 240, 30);
ctx.stroke();