console.log(Math.PI);
console.log(Math.max(1,2,3,4,5));

class MyMath {
  static readonly PI = 3.14;  //atributo statico

  static max(...numbers: number[]){ //Parametro tipo Rest--metodo statico
    return numbers.reduce((max, item) => max >= item ? max : item
    );}
}

console.log('MyMath',MyMath.PI);

console.log('MyMath.max',MyMath.max(1,2,3,12));
console.log('MyMath.max',MyMath.max(-1,-2,-3,-12));
