import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {

  @Input() item!: Product;

  constructor(private cartService:CartService) { }

  ngOnInit() {}

  comprar(product:Product) {
    this.cartService.addProduct(product)
  }



}
