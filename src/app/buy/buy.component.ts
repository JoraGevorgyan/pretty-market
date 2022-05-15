import {Component, OnInit} from '@angular/core';
import {eventListeners} from "@popperjs/core";

type Product = {
    name: string;
    description: string;
    img: string;
    price: number;
    sellPercent: number;
};

let products: Array<Product> = [
    {
        name: 'jins',
        description: 'barev sencel mna vat chi',
        img: '/assets/products/10.jpg',
        price: 100,
        sellPercent: 0,
    },
    {
        name: 'heraxos',
        description: 'vochinch patahuum a',
        img: '/assets/products/10.jpg',
        price: 430,
        sellPercent: 14,
    },
    {
        name: 'backpack',
        description: 'lavn a vonc vor',
        img: '/assets/products/10.jpg',
        price: 200,
        sellPercent: 0,
    },
    {
        name: 'jins',
        description: 'barev sencel mna vat chi',
        img: '/assets/products/10.jpg',
        price: 100,
        sellPercent: 20,
    }
];

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
    public currentProducts: Array<Product> = [];
    public defaultImgUrl = '/assets/products/12.jpg'
    constructor() {
        this.currentProducts = products;
        console.log(products)
    }

    getCurrentPrice(product: Product): number {
        return product.price * (1 - product.sellPercent / 100);
    }

    searchProducts(event: any) {
        const val = event.target.value.toString().toLowerCase();

        if (!val) {
            this.currentProducts = products;
        } else {
            this.currentProducts = products.filter(i => {
                return i.name.toLowerCase().indexOf(val) > -1 || i.description.toLowerCase().indexOf(val) > -1;
            })
        }
    }

    setProduct(product: Product) {
        products.push(product);
    }

    getProducts(): Array<Product> {
        //todo get products from API
        return products;
    }

    ngOnInit(): void {
    }

}
