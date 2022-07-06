export class MyDate {

  //sin propiedades declaradas

  constructor( //Nueva sintaxis , propiedades definidad directamente en el contructor
    // Debemos explicitamente ponerle el modificador de acceso para que pertenezca a la clase
    public year: number = 1994, //con valor por defecto
    private month: number = 1, //Valor por defecto
    public day: number = 13 //Valor por defecto
    ){}
  //  CREANDO METODOS
  printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}


// INSTANCIANDO CLASE Y UTILIZANDO CONSTRUCTOR VACIO
const myDate = new MyDate();
console.log(myDate.printFormat());  //imprime valores por defecto

