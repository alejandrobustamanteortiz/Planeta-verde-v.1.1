import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosPageRoutingModule } from './todos-routing.module';

import { TodosPage } from './todos.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { HeaderPagesModule } from 'src/app/components/header-pages/header-pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosPageRoutingModule,
    SearchbarModule,
    ProductCardModule,
    CategoryItemModule,
    HeaderPagesModule
  ],
  declarations: [TodosPage]
})
export class TodosPageModule {}
