import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getAll(){

    return [

      {id: 1, name: 'All', image: 'assets/categorias/all.png', active:true},
      {id: 2, name: 'Fruta', image: 'assets/categorias/fruta.png', active:false},
      {id: 3, name: 'Bebidas', image: 'assets/categorias/bebidas.png', active:false},
      {id: 4, name: 'Cafe', image: 'assets/categorias/cafe.png', active:false},
      {id: 5, name: 'Pasta', image: 'assets/categorias/Pasta.png', active:false},
    ]
  }


}
