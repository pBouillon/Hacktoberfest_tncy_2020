import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventViewComponent } from './event-view/event-view.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    EventViewComponent,
    MainBannerComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [
    EventViewComponent,
    FooterComponent,
    MainBannerComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
