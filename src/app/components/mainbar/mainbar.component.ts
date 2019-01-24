import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InterfaceProduct } from '../../models/IntefaceProduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit, OnDestroy {
  searchTyping = new Subject();
  allProducts: Observable<InterfaceProduct[]>;
  products: Observable<InterfaceProduct[]>;
  subscription: any;

  constructor(private productService: ProductService) {  }

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
    this.products = this.allProducts;
    this.subscription = this.searchTyping
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
        .subscribe((typedText: string) => {
          const searchText = typedText.toUpperCase();
          if(typedText === "")
            this.allProducts = this.allProducts;
          else {
            this.products = this.allProducts.pipe(
              map(items =>
                items.filter(item =>
                  ((item.name.toUpperCase()
                  .indexOf(searchText) !== -1) || (item.description.toUpperCase()
                  .indexOf(searchText) !== -1) ))
            ));
          }
        });
  }
  onSearch(value: string) {
    this.searchTyping.next(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
