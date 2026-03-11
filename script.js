const canvas = document.getElementById("radarCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let angle = 0;

function drawRadar(){

ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle="lime";
ctx.lineWidth=2;

for(let r=50;r<=200;r+=50){
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height,r,Math.PI,2*Math.PI);
ctx.stroke();
}

for(let a=0;a<=180;a+=30){

let x = canvas.width/2 + 200*Math.cos(a*Math.PI/180);
let y = canvas.height - 200*Math.sin(a*Math.PI/180);

ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height);
ctx.lineTo(x,y);
ctx.stroke();
}

let x = canvas.width/2 + 200*Math.cos(angle*Math.PI/180);
let y = canvas.height - 200*Math.sin(angle*Math.PI/180);

ctx.strokeStyle="lime";

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

if(!navigator.bluetooth){

alert("Bluetooth non supporté par ce navigateur");
return;

}

try{

device = await navigator.bluetooth.requestDevice({
acceptAllDevices:true
});

const server = await device.gatt.connect();

alert("Connecté à " + device.name);

}catch(error){

alert("Erreur : " + error);

}

}

function sendCommand(cmd){

if(!device){
alert("Connecte le Bluetooth d'abord");
return;
}

console.log("Commande envoyée :",cmd);

}
