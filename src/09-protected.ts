export abstract class Animal{
  constructor(protected name: string){

  }
  move(){//metodo
    console.log('Moving along!');
  }
  greeting(){//metodo
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething(){          //PROTECTED solo acceden yo y mis hijos
    console.log('Im doing something');
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
      this.doSomething();   //Puedo acceder a un metodo protected en mi clase Padre
    }
  }

  move(): void {
      console.log('Im move as a Dog');
      super.move(); //accedo al move de mi Padre
  }
}

//Instancia de objeto de clase Animal
//const fifi = new Animal('fifi');
//console.log(fifi.greeting());

//Instancia de objeto de clase Dog
const rocky = new Dog('rocky','felipe');
rocky.woof(1);
rocky.move();
