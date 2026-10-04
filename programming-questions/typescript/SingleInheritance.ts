class Animal {
    eat(): void {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();
