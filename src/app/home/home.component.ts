import {Component, OnInit} from '@angular/core';
import {ClothesService} from "../services/clothes/clothes.service";
import {Clothes} from "../shared/models/Clothes";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  clothes: Clothes[] = [];

  constructor(private clothesService: ClothesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.clothes = this.clothesService.getAll();
    this.route.params.subscribe(params => {
     if (params['searchTerm'])
        this.clothes = this.clothesService.getAllClothesBySearchTerm(params['searchTerm']);
     else if(params['tag']) {
       this.clothes = this.clothesService.getAllClothesByTag(params['tag']);
     } else
        this.clothes = this.clothesService.getAll();
    })
  }

}
