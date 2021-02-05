import { Injectable } from '@angular/core';
import { products } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:products[]=[
    {id:"abc",name:"Hard-Disk",description:"Latest Hard-Disk..",image:"../assets/disk-image.jpg",video:"../assets/disk-video.mp4"}
  ];

  constructor() { }

  getProducts(){
    return [...this.products];
  }

  getProductById(id:string){
    return this.products.find(prod=>{
      return id===prod.id;
    })
  }
}
