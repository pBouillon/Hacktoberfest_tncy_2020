import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './main-banner/main-banner.component';



@NgModule({
  declarations: [
    MainBannerComponent,
  ],
  exports: [
    MainBannerComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
