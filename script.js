let device = null;

async function connectBluetooth() {

if (!navigator.bluetooth) {
alert("Bluetooth non supporté sur ce navigateur");
return;
}

try {

device = await navigator.bluetooth.requestDevice({
acceptAllDevices: true
});

alert("Appareil sélectionné : " + device.name);

} catch (error) {

console.log(error);
alert("Connexion annulée ou erreur");

}

}

function sendCommand(cmd) {

if (!device) {
alert("Connecte le Bluetooth d'abord");
return;
}

console.log("Commande :", cmd);

}
