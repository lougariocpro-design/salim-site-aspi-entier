document.getElementById("bt").addEventListener("click", async () => {

if (!navigator.bluetooth) {
alert("Bluetooth non supporté");
return;
}

try {

const device = await navigator.bluetooth.requestDevice({
acceptAllDevices: true
});

alert("Appareil choisi : " + device.name);

} catch (error) {

alert("Erreur : " + error);

}

});
