// Single Inheritance Example in JavaScript (ES6)

class Animal {
    eat() {
        console.log("Animal eats food.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks: Woof! Woof!");
    }
}

let d = new Dog();
d.eat();
d.bark();
