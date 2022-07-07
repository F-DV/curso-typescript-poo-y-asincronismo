import axios from 'axios';
import {Product} from './models/product.model';

(async()=>{

  //FORMA 1 --> TIPANDO CON AXIOS !!recomendada!!
  async function getProducts1() {
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  // FORMA 2 --> desde la funcion
  async function getProducts2(): Promise<Product[]> {
    const respuesta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return respuesta.data;
  }

  //FORMA 3 --> Forzando el Tipado con un Cast
  async function getProducts3(): Promise<Product[]> {
    const respuesta = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = respuesta.data as Product[];
    return data;
  }

  //1
  const products = await  getProducts1();
  console.log(products.map(item => `${item.id} -- ${item.title}`));

  //2
  const products2 = await  getProducts2();
  console.log(products2.map(item => `${item.id} -- ${item.title}`));

  //3
  const products3 = await  getProducts2();
  console.log(products3.map(item => `${item.id} -- ${item.title}`));
})();
