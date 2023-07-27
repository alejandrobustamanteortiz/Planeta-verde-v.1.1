import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastaPageRoutingModule } from './pasta-routing.module';

import { PastaPage } from './pasta.page';

import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { HeaderPagesModule } from 'src/app/components/header-pages/header-pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastaPageRoutingModule,
    SearchbarModule,
    ProductCardModule,
    CategoryItemModule,
    HeaderPagesModule
  ],
  declarations: [PastaPage]
})
export class PastaPageModule {}
