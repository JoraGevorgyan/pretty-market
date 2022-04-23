import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { ProductsComponent } from './products/products.component';
import { ChatComponent } from './chat/chat.component';
import { BrokerComponent } from './broker/broker.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModules} from "./app-routing.modules";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    SellComponent,
    ProductsComponent,
    ChatComponent,
    BrokerComponent,
    AuthComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
