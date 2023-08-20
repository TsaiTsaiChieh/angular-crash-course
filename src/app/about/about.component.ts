import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  param: any
  queryParam: any
  constructor(private activatedRouter: ActivatedRoute,
    private service: ProductService,) {
    
  } 

  
  ngOnInit(): void {
    console.log(this.activatedRouter)
    this.param = this.activatedRouter.snapshot.params['username']
    this.queryParam = this.activatedRouter.snapshot.queryParams['course']
    this.service.getAllProductWithLimit().subscribe({
      next (data) {
        console.log(data)
      },
    })
  
  }
}
