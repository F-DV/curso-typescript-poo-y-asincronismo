import { Animal, Dog } from "./09-protected";

//const animal = new Animal('Puppy'); //no puedo instanciar una clase abstracta
//animal.greeting();

const dog = new Dog('Rocky','felipe'); //Si puedo instanciar los hijos de Animal Class
dog.greeting();
