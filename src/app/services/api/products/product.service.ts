import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductRepresentation} from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/'
  constructor( private http: HttpClient
    ) { 

    }

  getAllProductWithLimit(limit: number = 5)  {
    const productsUrl: string = this.baseUrl + `products?limit=${limit}`
    return this.http.get<ProductRepresentation[]>(productsUrl)
  }
}
