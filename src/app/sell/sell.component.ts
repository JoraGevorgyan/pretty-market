import {Component, OnInit} from '@angular/core';
import {BuyComponent} from "../buy/buy.component";

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

    constructor() {
    }
    buyObj = new BuyComponent();
    setPrd () {
      let t =   {
        name: 'jins',
        description: 'barev sencel mna vat chi',
        img: '/products/10.jpg',
        price: 100,
        sellPercent: 20,
      };
      this.buyObj.setProduct(t);
      console.log(this.buyObj.getProducts());
    }
    ngOnInit(): void {
    }

}
