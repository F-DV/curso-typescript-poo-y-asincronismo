
const date = new Date(); //Clase nativa
date.getTime();         //Metodos de clase
date.getHours();
date.getDay();

const date1 = new Date(1994,0,12); //0 enero diciembre 11
date1.getHours();
date1.getTime();
date1.toDateString();

console.log(date);
console.log(date1);

/*
  SINTAXIS PARA CREAR CLASE PROPIA
*/
class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// INSTANCIANDO CLASE PROPIA
const myDate = new MyDate(1999,0,1);
console.log(myDate);
