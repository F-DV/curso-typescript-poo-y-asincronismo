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

  //Metodo Setter a una propiedad de la clase
  set day(newDay:number){
    //reglas de negocio opcionales para modificar
    if(newDay >= 1 && newDay <= 30){
      this._day = newDay;
    }else{
      throw new Error('Day out range');
    }
  }

  //metodo Getter
  get day():number{
    return this._day;
  }

}
// INSTANCIANDO OBJETO DE CLASE
const myDate = new MyDate(1994,1,1);

myDate.day = 30;   //podemos modificar
console.log(myDate.day); //accedemos al metodo get day(), como si fuera una propiedad
console.log(myDate.printFormat());
