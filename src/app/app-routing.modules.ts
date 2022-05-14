import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {BuyComponent} from "./buy/buy.component";
import {SellComponent} from "./sell/sell.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: AuthComponent},
    {path: "buy", component: BuyComponent},
    {path: "sell", component: SellComponent},
    {path: "", redirectTo: '/home', pathMatch: 'full'},
    {path: "**", component: PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModules {
}
