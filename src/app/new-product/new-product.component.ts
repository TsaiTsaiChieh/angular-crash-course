import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  constructor(private service: ProductService, private router: Router) {}
  product: ProductRepresentation = {};

  saveProduct() {
    // console.log(this.product)
    this.service.createProduct(this.product).subscribe({
      next: () => {
        this.router.navigate(['products']);
      },
    });
  }
}
