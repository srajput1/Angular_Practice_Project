import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CakeImagesComponent } from './header/cake-images/cake-images.component';
import { CakeServiceService } from '../services/cake-service.service';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
   CakeImagesComponent,
   MenuComponent,
   CartComponent,
   ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CakeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
