import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:Product[] = []

  private productsBehavieur: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])

  constructor() {
    this.loadProducsLocal()
    this.productsBehavieur.next(this.products)
    this.productsBehavieur.subscribe(products =>  this.saveProductStorage())

   }

  saveProductStorage(){
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  loadProducsLocal() {
    const datosGuardados = localStorage.getItem('products');
    if (datosGuardados) {
      this.products = JSON.parse(datosGuardados);
    }
  }


  getProducts() {
    return this.productsBehavieur.asObservable();
  }

  addProduct (product:Product) {
    this.products.push(product)
    this.productsBehavieur.next(this.products)
  }

  removeProduct(index:number) {
    this.products.splice(index,1)
    this.productsBehavieur.next(this.products)
  }

  


}
