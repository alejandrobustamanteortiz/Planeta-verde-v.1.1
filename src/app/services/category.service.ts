import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getAll(){

    return [

      {name: 'Bebidas', image: 'assets/banner/fruteria.jpg'},
      {name: 'Fruta', image: 'assets/banner/fruteria2.jpg'},
    ]
  }


}
