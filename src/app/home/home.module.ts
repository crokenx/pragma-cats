import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { GeneralService } from './services/general.service';
import { CatInterceptor } from './interceptors/cat.interceptor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomePage],
  providers: [
    GeneralService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatInterceptor,
      multi: true,
    },
  ],
})
export class HomePageModule {}
