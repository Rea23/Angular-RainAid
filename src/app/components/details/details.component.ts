import { Component, OnInit } from '@angular/core';
import { InterfaceProduct } from 'src/app/models/IntefaceProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product_id: number;
  product: InterfaceProduct;

  constructor(private router: ActivatedRoute,
    private productService: ProductService,
    private router2: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product_id = +params['id'];
      this.productService.getProduct(this.product_id).subscribe(prod => {
        this.product = prod;
      });
    });
  }

  onBtnBack() {
    this.router2.navigate([""]);
  }

}
