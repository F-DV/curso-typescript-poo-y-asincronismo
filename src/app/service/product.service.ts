import {faker} from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

//Migrando a clase
export class ProductMemoryService{
  private products: Product[] =[];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),

      }
    }
    products.push(newProduct);
    return newProduct;
  }

  add(product: Product){
    this.products.push(product);
    return product;
  }

  update (id: Product['id'], changes: UpdateProductDto ): Product {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = {
      ...prevData,
      ...changes
    }
    return products[index];
  }

  findOne(id: Product['id']){
    return this.products.find(item => item.id === id);
  }
}

export const products: Product[] = [];

