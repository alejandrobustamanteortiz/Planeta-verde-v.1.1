import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchbarModule,
    CategoryItemModule
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
