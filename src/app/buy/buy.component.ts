import {Component, OnInit} from '@angular/core';

type Product = {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
    sellPercent: number;
};

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
    public currentProducts: Array<Product> = [];

    private products: Array<Product> = [
        {
            id: 1,
            name: 'jins',
            description: 'barev sencel mna vat chi',
            img: '/products/10.jpg',
            price: 100,
            sellPercent: 0,
        },
        {
            id: 2,
            name: 'heraxos',
            description: 'vochinch patahuum a',
            img: '/products/10.jpg',
            price: 430,
            sellPercent: 0,
        },
        {
            id: 3,
            name: 'backpack',
            description: 'lavn a vonc vor',
            img: '/products/10.jpg',
            price: 200,
            sellPercent: 0,
        },
        {
            id: 4,
            name: 'jins',
            description: 'barev sencel mna vat chi',
            img: '/products/10.jpg',
            price: 100,
            sellPercent: 0,
        },
        {
            id: 5,
            name: 'jins',
            description: 'barev sencel mna vat chi',
            img: '/products/10.jpg',
            price: 100,
            sellPercent: 0,
        },
        {
            id: 6,
            name: 'jins',
            description: 'barev sencel mna vat chi',
            img: '/products/10.jpg',
            price: 100,
            sellPercent: 0,
        },
        {
            id: 7,
            name: 'jins',
            description: 'barev sencel mna vat chi',
            img: '/products/10.jpg',
            price: 100,
            sellPercent: 20,
        },
    ];

    constructor() {

        this.currentProducts = this.products;

    }

    getCurrentPrice (product: Product):number {
        return product.price * (1- product.sellPercent/100);
    }

    searchProducts(e: any) {
        const val = e.value.toString().toLowerCase();

        if (!val) {
            this.currentProducts = this.products;
        } else {
            this.currentProducts = this.products.filter(i => {
                return i.name.toLowerCase().indexOf(val) > -1 || i.description.toLowerCase().indexOf(val) > -1;
            })
        }
    }

    getProducts(): Array<Product> {
        //todo get products from API
        return this.products;
    }

    ngOnInit(): void {
    }

}
