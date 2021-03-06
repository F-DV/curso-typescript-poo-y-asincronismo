/*
  CLASE PROPIA
*/
export class MyDate {
  private year: number; //Propiedad privada
  month: number;
  private day: number;  //Proiedad privada

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //  CREANDO METODOS
  printFormat():string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){  //Metodo private
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
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

  getDay(){
    return this.addPadding(this.day);
  }
}


// INSTANCIANDO CLASE Y UTILIZANDO METODOS
const myDate = new MyDate(1994,1,1);
console.log(myDate.printFormat());

console.log(myDate.getDay());
