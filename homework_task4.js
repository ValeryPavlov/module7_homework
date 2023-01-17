//Задание №4.

function Device (name){
    this.name = name;
}
Device.prototype.statusDevice = function (status, name){
    if (status === "on") {
        console.log (` ${name} включен в сеть`);
    } else if (status === "off") {
        console.log (` ${name} выключен из сети`);
    }
}
Device.prototype.powerСonsumption = function (current, volts, name){
    const power  = current * volts;
    console.log (`Потребляемая мощность ${name} равна ${power}`);
}
function Type (current, volts, name){
    this.current = current;
    this.volts = volts;
    this.name = name;
}

Type.prototype = new Device ();
const Computer = new Type (10, 5, "Computer");
const Lamp = new Type(3, 11, "Lamp") ;
Lamp.statusDevice ("off", "Lamp");
Computer.statusDevice ("on", "Computer");
console.log (Computer);
console.log (Lamp);
Computer.powerСonsumption (10, 5, "Computer");
Lamp.powerСonsumption (3, 11, "Lamp");
