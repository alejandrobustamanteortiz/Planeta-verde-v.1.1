import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products!:Product[]

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(product =>
        this.products = product
      )
  }

  eliminar(index:number){
    this.cartService.removeProduct(index)
  }


  onIonInfinite(ev:Event) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
