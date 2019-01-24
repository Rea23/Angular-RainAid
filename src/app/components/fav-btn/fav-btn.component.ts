import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { InterfaceProduct } from 'src/app/models/IntefaceProduct';
import { InterfaceReview } from 'src/app/models/InterfaceReview';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.css']
})
export class FavBtnComponent implements OnInit {
  @Input() product: InterfaceProduct;
  currentFavList: any[];
  // @Input() reviews: InterfaceReview[];
  // rateArray: number[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.favList.subscribe(items => this.currentFavList = items);
    // this.rateArray = this.reviews.map(rec => rec.rate);
  }

  addToFav() {
    this.product.flag = !this.product.flag;
    if (this.product.flag) {
      // const sum = this.rateArray.reduce((suma, currentValue) => suma + currentValue);
      // let result =+ (sum / this.rateArray.length).toFixed(2);
      this.currentFavList.push({id: this.product.id, name: this.product.name, picture: this.product.picture, price: this.product.price});
    } 
    else {
      this.currentFavList = this.currentFavList.filter(item => item.id !== this.product.id);
      this.productService.favList.next(this.currentFavList);
    }
  }

}
