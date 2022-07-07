export class MyService{

  static intance: MyService | null = null; //para controlar las instancias, que sea solo una

  private constructor(private name: string){}

  getName():string{
    return this.name;
  }
  static create(name: string){  //Metodo para crear Singleton
    if(MyService.intance === null){
      MyService.intance = new MyService(name);
    }
    return MyService.intance;
  }
}

const myService1 = MyService.create('service 1');
const myService2 = MyService.create('service 2');

console.log(myService1);
console.log(myService2);
