// Multilevel Inheritance Example in JavaScript (ES6)

class Vehicle {
    startEngine() {
        console.log("Vehicle engine started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving on the road");
    }
}

class SportsCar extends Car {
    turboBoost() {
        console.log("SportsCar turbo boost activated!");
    }
}

let sc = new SportsCar();
sc.startEngine();
sc.drive();
sc.turboBoost();
