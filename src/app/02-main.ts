import {ProductMemoryService} from './service/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: []
})

const products = productService.getAll();

console.log(products);
