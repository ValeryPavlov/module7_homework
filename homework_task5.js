//Задание №5.

class Device {
    constructor (name){
        this.name = name;
    }
    statusDevice  (status, name){
        if (status === "on") {
            console.log (` ${name} включен в сеть`);
        } else if (status === "off") {
            console.log (` ${name} выключен из сети`);
        }
    }
    powerСonsumption (current, volts, name){
        const power  = current * volts;
        console.log (`Потребляемая мощность ${name} равна ${power}`);
    }
}

class Type extends Device {
    constructor (current, volts, name){
        super(name);
        this.current = current;
        this.volts = volts;
        this.name = name;
    }
}
const Computer = new Type (10, 5, "Computer");
const Lamp = new Type(3, 11, "Lamp") ;
Computer.powerСonsumption (10, 5, "Computer");
Lamp.powerСonsumption (3, 11, "Lamp");
console.log (Computer);
console.log (Lamp);
Lamp.statusDevice ("off", "Lamp");
Computer.statusDevice ("on", "Computer");