import {Component, OnInit} from '@angular/core';
import {BuyComponent} from "../buy/buy.component";

type Product = {
    name: string;
    description: string;
    img: string;
    price: number;
    sellPercent: number;
};

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
    private product: Product = {
        name: '',
        description: '',
        img: '',
        price: 0,
        sellPercent: 0
    };

    constructor() { }

    setName(event: any) {
        this.product.name = event.target.value;
    }

    setDescription(event: any) {
        this.product.description = event.target.value;
    }

    setImg(event: any) {
        this.product.img = event.target.value;
    }

    setPrice(event: any) {
        this.product.price = event.target.value;
    }

    setSellPercent(event: any) {
        this.product.sellPercent = event.target.value;
    }

    buyObj = new BuyComponent();
    addProduct() {
        if (!this.product.name || !this.product.price) {
            alert('Имя и Цена обязательны!');
            return;
        }
        this.buyObj.setProduct(this.product);
        alert('Ваш продукт был успешно добавлен.')
    }
    ngOnInit(): void {}
}
