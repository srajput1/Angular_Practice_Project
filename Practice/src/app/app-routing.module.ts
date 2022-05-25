import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CakeImagesComponent } from './header/cake-images/cake-images.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path : 'home' , component:CakeImagesComponent },
  {path : 'menu' , component: MenuComponent },
  {path : 'cart' , component: CartComponent },
  {path : 'contactus' , component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
