let canvas = document.getElementById("radarCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let angle = 0;

function drawRadar(){

ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle="lime";

for(let i=0;i<180;i+=30){
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height,200,Math.PI,2*Math.PI);
ctx.stroke();
}

let x = canvas.width/2 + 200*Math.cos(angle*Math.PI/180);
let y = canvas.height + 200*Math.sin(angle*Math.PI/180);

ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height);
ctx.lineTo(x,y);
ctx.stroke();

angle+=1;

if(angle>180){
angle=0;
}

requestAnimationFrame(drawRadar);
}

drawRadar();



let device;
let characteristic;

async function connectBluetooth(){

device = await navigator.bluetooth.requestDevice({
acceptAllDevices:true,
optionalServices:['ffe0']
});

const server = await device.gatt.connect();
const service = await server.getPrimaryService('ffe0');
characteristic = await service.getCharacteristic('ffe1');

alert("Connecté !");
}

function sendCommand(cmd){

if(!characteristic){
alert("Connecte le Bluetooth");
return;
}

let encoder = new TextEncoder();
characteristic.writeValue(encoder.encode(cmd));
}
