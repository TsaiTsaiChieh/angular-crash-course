import { Component, Input, OnInit } from '@angular/core';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {ProductService} from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductRepresentation[] = []
  constructor(private service: ProductService) {

  }
  
  ngOnInit (): void {
    this.service.getAllProductWithLimit().subscribe({next: 
    (result)=> {
      this.products = result
    }})
  }
}
