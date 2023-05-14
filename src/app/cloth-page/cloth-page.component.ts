import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Clothes} from "../shared/models/Clothes";
import {ClothesService} from "../services/clothes/clothes.service";
import {CartService} from '../services/cart/cart.service';

@Component({
    selector: 'app-cloth-page',
    templateUrl: './cloth-page.component.html',
    styleUrls: ['./cloth-page.component.css']
})
export class ClothPageComponent implements OnInit {

    cloth!: Clothes;

    constructor(private activatedRoute: ActivatedRoute,
                private clothesService: ClothesService,
                private cartService: CartService) {
        activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.cloth = clothesService.getClothById(params['id']);
            }
        })
    }

    ngOnInit(): void {
    }

    addToCart() {
        this.cartService.addToCart(this.cloth);
    }
    checkCart() {
        return this.cartService.checkCart(this.cloth.id);
    }

}
