//Задание 1: Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

//Задание 2: Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта
// свойство с данным именем. Функция должна возвращать true или false.

function checkPropInObj (str, obj) {
  return (str in obj);
}

//Задание 3: Написать функцию, которая создает пустой объект, но без прототипа.

function createObjWithoutProto() {
  return Object.create(null);
}

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