import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Clothes} from "../shared/models/Clothes";
import {ClothesService} from "../services/clothes/clothes.service";

@Component({
  selector: 'app-cloth-page',
  templateUrl: './cloth-page.component.html',
  styleUrls: ['./cloth-page.component.css']
})
export class ClothPageComponent implements OnInit {

  clothes! : Clothes;
  constructor(private activatedRoute: ActivatedRoute, private clothesService: ClothesService) {
    activatedRoute.params.subscribe((params)=> {
      if(params['id']){
        this.clothes = clothesService.getClothById(params['id']);
      }
    })
  }
  ngOnInit(): void {
  }

}
