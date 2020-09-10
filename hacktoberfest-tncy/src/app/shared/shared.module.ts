import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MainBannerComponent,
    MenuComponent,
  ],
  exports: [
    MainBannerComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
