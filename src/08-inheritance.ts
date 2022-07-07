export class Animal{
  constructor(public name: string){

  }
  move(){//metodo
    console.log('Movinf along!');
  }
  greeting(){//metodo
    return `Hello, I'm ${this.name}`;
  }
}

//HERENCIA
export class Dog extends Animal{//clase que hereda
  constructor(
    public name: string,
    public owner: string
  ){
    super(name);
  }
  woof(times: number){
    for(let index=0;index<times;index++){
      console.log('Woof!!');
    }
  }
}

//Instancia de objeto de clase Animal
const fifi = new Animal('fifi');
console.log(fifi.greeting());

//Instancia de objeto de clase Dog
const rocky = new Dog('rocky','felipe');
rocky.woof(5);
