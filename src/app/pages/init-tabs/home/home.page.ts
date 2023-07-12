import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories!: Category[];
  products!: Product[];

 
  
 
  

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {

    this.categories = this.categoryService.getAll();
    this.products = this.productService.getProducts();
    
  }

}
