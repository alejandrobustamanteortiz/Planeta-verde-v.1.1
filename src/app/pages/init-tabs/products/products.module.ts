import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { HeaderPagesModule } from 'src/app/components/header-pages/header-pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    SearchbarModule,
    ProductCardModule,
    CategoryItemModule,
    HeaderPagesModule
  ],
  declarations: [ProductsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsPageModule {}
