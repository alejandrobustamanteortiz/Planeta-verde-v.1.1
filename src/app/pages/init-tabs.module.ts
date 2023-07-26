import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitTabsPageRoutingModule } from './init-tabs-routing.module';

import { InitTabsPage } from './init-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitTabsPageRoutingModule
  ],
  declarations: [InitTabsPage]
})
export class InitTabsPageModule {}
