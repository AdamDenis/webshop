import {Component, Input, OnInit} from '@angular/core';
import { Tag } from '../shared/models/Tag';
import {ClothesService} from "../services/clothes/clothes.service";


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  clothePageTags?: string[];

  @Input()
  justifyContent : string = 'center';
  status : boolean;
  tags?: Tag[];
  tagName: any;

  constructor(private clotheService: ClothesService) {
    this.status = false;
  }

  ngOnInit(): void {
    if(!this.clothePageTags)
      this.tags = this.clotheService.getAllTags();
  }

}
