import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { InterfaceReview } from 'src/app/models/InterfaceReview';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products = [];
  @Input() reviews: InterfaceReview[];
  rateArray: number[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.favList.subscribe(items => {
      this.products = items;
    });
    this.rateArray = this.reviews.map(rec => rec.rate);
  }

  getRate(): number {
    const sum = this.rateArray.reduce((suma, currentValue) => suma + currentValue);
    let result =+ (sum / this.rateArray.length).toFixed(2);
    return result;
  }

}
