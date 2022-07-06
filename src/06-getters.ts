/*
  CLASE PROPIA
*/
export class MyDate {

  constructor(
  public year: number = 1994,
  private month: number = 1,
  private _day: number = 13
  ){}

  //  CREANDO METODOS
  printFormat():string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){  //Metodo private
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }

  //Metodo Getter a una propiedad de la clase
  get day(): number{
    return this._day;
  }


}
// INSTANCIANDO OBJETO DE CLASE
const myDate = new MyDate(1994,1,1);
//myDate.day = 10; //No deja modificarla

console.log(myDate.day); //accedemos al metodo get day(), como si fuera una propiedad
console.log(myDate.printFormat());
