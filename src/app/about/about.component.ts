import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {HttpErrorResponse} from '@angular/common/http';

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


  ngOnInit (): void {
    console.log(this.activatedRouter)
    this.param = this.activatedRouter.snapshot.params['username']
    this.queryParam = this.activatedRouter.snapshot.queryParams['course']
    this.service.getAllProductWithLimit().subscribe({
      next: (data: ProductRepresentation[]) => {
        console.log(data)
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
    // create product
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product Description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    }
    this.service.createProduct(product).subscribe({
      next (data) {
        console.log(data)
      },
      error (error: HttpErrorResponse) {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred:', error)
        } else {
          // server side error
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`)
        }
      }
    })
  }
}
