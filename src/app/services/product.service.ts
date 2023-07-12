import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[]{

    return[
      {
        id: 1,
        title: "Macarrones Castagno",
        image: 'assets/productos/macarrones-de-kamut800.png',
        price: 3.55,
        description: "(0.92/kg)", 

      },
      {
        id: 2,
        title: "Macarrones Castagno",
        image: 'assets/productos/macarrones-de-kamut800.png',
        price: 3.95,
        description: "(0.92/kg)", 

      },
      {
        id: 3,
        title: "Macarrones Castagno",
        image: 'assets/productos/macarrones-de-kamut800.png',
        price: 3.55,
        description: "(0.92/kg)", 

      },
      {
        id: 4,
        title: "Macarrones Castagno",
        image: 'assets/productos/macarrones-de-kamut800.png',
        price: 3.95,
        description: "(0.92/kg)", 

      },
    ]


  }

 
}
