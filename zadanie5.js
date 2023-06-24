//Задание 5: Переписать консольное приложение из задания-4 на классы.

class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
 
  plugIn() {
    console.log(this.name + " включен!");
    this.isPlugged = true;
  }
  

  unplug() {
    console.log(this.name + " выключен!");
    this.isPlugged = false;
  }
}

class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}


class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}


const myLamp = new Lamp("Table lamp", "Lightbright", 12, "LED");
const myComputer = new Computer("Laptop PC", "HP", 2000, "laptop", "for study");


myLamp.unplug();
myComputer.plugIn();


console.log(myComputer)
console.log(myLamp)