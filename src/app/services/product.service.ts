import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { doc,collection,getDocs, docSnapshots, Firestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable,take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private firestore: Firestore) {}

  async getProducts(): Promise<Product[]> {
     const documents = await getDocs(collection(this.firestore, 'products'));
    const aa = documents.docs.map(
      (doc) => {
        const id = parseInt(doc.id);
        const data = doc.data() as Product;
        return data;
      });
    return aa;
  }


  

 

}
