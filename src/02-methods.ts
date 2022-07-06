/*
  SINTAXIS PARA CREAR CLASE PROPIA
*/
export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //  CREANDO METODOS
  printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount:number, type:'days' | 'months' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
}


// INSTANCIANDO CLASE Y UTILIZANDO METODOS
const myDate = new MyDate(1994,1,1);
console.log(myDate.printFormat());

myDate.add(3, "days");
console.log(myDate.printFormat());
