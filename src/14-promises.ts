import axios from 'axios';

(async()=>{

  function delay(time: number){ //funcion para simular una promesa
    const promise = new Promise<boolean>((resolve) =>{//por medio del generico le indicamos que tipo devuelve
      setTimeout(()=>{
        resolve(true);
      }, time);

    });
    return promise;
  }

  function getProducts(){ //asyn implicito
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync(){ //asyn expliciro
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('Inicio de programa');
  const rta = await delay(3000);
  console.log(rta);


  const products = await getProducts();//asinc implicito
  console.log(products.data);

  const productsAsinc = getProductsAsync();
  console.log(productsAsinc);

})();
