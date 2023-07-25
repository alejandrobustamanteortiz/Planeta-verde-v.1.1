import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPagesComponent } from './header-pages.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarModule } from '../searchbar/searchbar.module';



@NgModule({
  declarations: [HeaderPagesComponent],
  imports: [
    CommonModule,IonicModule,SearchbarModule
  ],
  exports:[HeaderPagesComponent]
})
export class HeaderPagesModule { }
