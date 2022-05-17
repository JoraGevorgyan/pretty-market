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
        name: 'рюкзак',
        description: 'Очень удобный рюкзак для путешествий.',
        img: '/assets/products/10.jpg',
        price: 100,
        sellPercent: 0,
    },
    {
        name: 'телефон',
        description: 'Наслаждайтесь выполнением и приемом звонков, поиском в Интернете и многим другим.',
        img: '/assets/products/phone.webp',
        price: 430,
        sellPercent: 14,
    },
    {
        name: 'туфли',
        description: 'Созданы специально для ваших ног.',
        img: '/assets/products/shoes.jpg',
        price: 200,
        sellPercent: 0,
    },
    {
        name: 'джинсы',
        description: 'В них вы почувствуете себя фотомоделью.',
        img: '/assets/products/jeans.jpg',
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
