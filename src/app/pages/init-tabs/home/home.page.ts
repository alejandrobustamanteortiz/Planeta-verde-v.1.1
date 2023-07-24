import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
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
  countCart!: number;

 
  
 
  

  constructor(private categoryService: CategoryService, 
        private productService: ProductService,
        private cartService:CartService) { }

  ngOnInit() {

    this.categories = this.categoryService.getAll();
    this.productService.getProducts().then((value) => {
      console.log(value)
      this.products = value
      // Expected output: "Success!"
    });

    this.cartService.getProducts().subscribe((products) => {
      this.countCart =products.length 
    })
  }

}
