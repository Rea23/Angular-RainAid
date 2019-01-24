import { Component, OnInit, Input } from '@angular/core';
import { InterfaceReview } from 'src/app/models/InterfaceReview';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() reviews: InterfaceReview[];
  rateArray: number[] = [];

  constructor() { }

  ngOnInit() {
    this.rateArray = this.reviews.map(rec => rec.rate);
  }

  getRate(): number {
    const sum = this.rateArray.reduce((suma, currentValue) => suma + currentValue);
    let result =+ (sum / this.rateArray.length).toFixed(2);
    return result;
  }

  onStarClick(rate: number) {
    this.rateArray.push(rate);
  }

}
