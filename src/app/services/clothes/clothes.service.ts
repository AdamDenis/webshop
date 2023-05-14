import {Injectable} from '@angular/core';
import {Clothes} from "../../shared/models/Clothes";
import {Tag} from "../../shared/models/Tag";


@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() {
  }

  getClothById(id: number) : Clothes{
    return this.getAll().find(clothes => clothes.id == id)!;
  }

  getAllClothesBySearchTerm(searchTerm: string) :Clothes[] {
    return this.getAll().filter(clothes =>
      clothes.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      {name: 'All', count: 8},
      {name: 'Shirt', count: 2},
      {name: 'Hoodie', count: 2},
      {name: 'Pants', count: 2},
      {name: 'Costume', count: 2},
      {name: 'Man', count: 3},
      {name: 'Woman', count: 2},
      {name: 'Child', count: 2},
    ]
  }

  getAllClothesByTag(tag: string): Clothes[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(clothes => clothes.tags?.includes(tag));
  }

  getAll(): Clothes[] {
    return [
      {
        id: 1,
        name: 'Shirt',
        price: 20,
        tags: ['Shirt', 'Woman'],
        favourite: true,
        stars: 3.5,
        imageUrl: '/assets/images/tshirt.png',
        
      },
      {
        id: 2,
        name: 'Shirt2',
        price: 23,
        tags: ['Shirt', 'Man'],
        favourite: false,
        stars: 3,
        imageUrl: '/assets/images/tshirt2.png',
      },
      {
        id: 3,
        name: 'Pants',
        price: 20,
        tags: ['Pants', 'Child'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/pants.png',
      },
      {
        id: 4,
        name: 'Pants2',
        price: 20,
        tags: ['Pants', 'Woman'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/pants2.png',
        
      },
      {
        id: 5,
        name: 'Hoodie',
        price: 30,
        tags: ['Hoodie', 'Man'],
        favourite: true,
        stars: 4.5,
        imageUrl: '/assets/images/hoodi.png',
        
      },
      {
        id: 6,
        name: 'Hoodie',
        price: 10,
        tags: ['Hoodie', 'Child'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/hoodi2.png',
        
      },
      {
        id: 7,
        name: 'Costume',
        price: 33,
        tags: ['Costume', 'Woman'],
        favourite: true,
        stars: 4.5,
        imageUrl: '/assets/images/form.png',
        
      },
      {
        id: 8,
        name: 'Costume',
        price: 20,
        tags: ['Costume', 'Man'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/form2.png',
        
      }
    ]
  }
}
