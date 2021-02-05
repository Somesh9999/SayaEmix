import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stageInfo } from 'src/app/stage-teaser/stageinfo.model';
import { products } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productLoaded:products;
  stageInfo:stageInfo;

  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(routeData=>{
      const prodId=routeData.get('id');
      this.productLoaded= this.productService.getProductById(prodId);
      console.log(this.productLoaded)
      this.stageInfo={stageImage:this.productLoaded.image,stageVideo:this.productLoaded.video};
    });
  }

}
