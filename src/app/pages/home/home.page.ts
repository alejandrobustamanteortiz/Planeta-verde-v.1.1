import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { register } from 'swiper/element/bundle';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories!: Category[];
  products!: Product[];

 
  
 
  

  constructor(private categoryService: CategoryService, private productService: ProductService, private http: HttpClient) { }

  ngOnInit() {

    
    this.getProducts().subscribe(res=>{
      this.products = res;
    })

    this.getCategories().subscribe(resC=>{
      this.categories = resC;
    })
    
    
  }

  getCategories(){
    return this.http
    .get("assets/files/categorias.json")
    .pipe(
      map((resC:any) =>{
        return resC.data;
      })
    )
  }

  getProducts(){
    return this.http
    .get("assets/files/productos.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
    
  }


}
