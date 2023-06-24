//Задание 4:
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
//Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в розетку. 
//Посчитать потребляемую мощность. Таких приборов должно быть,
// как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " включен!");
  this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
  console.log(this.name + " выключен!");
  this.isPlugged = false;
};

function Lamp(name, brand, power, bulbType) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.bulbType = bulbType;
  this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type, functionality) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.type = type;
  this.functionality = functionality;
  this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

const myTabLamp = new Lamp("Table lamp", "Lightbright", 12, "LED");
const studyPC = new Computer("Laptop PC", "HP", 2000, "laptop", "for study");

myTabLamp.unplug();
studyPC.plugIn();

console.log(studyPC)
console.logmy(myTabLamp)
