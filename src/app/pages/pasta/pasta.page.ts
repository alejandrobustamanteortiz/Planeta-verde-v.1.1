import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService, private http: HttpClient) { }


  ngOnInit() {
    this.getProducts().subscribe(res=>{
      console.log("Res", res)
      this.products = res;
    });
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

  
  getPastas() {
    if (this.products) {
      return this.products.filter((product: Product) => product.categoryId === 5);
    } else {
      return [];
    }
  }

}
