import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { InterfaceProduct } from '../models/IntefaceProduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Observable<InterfaceProduct[]>;
public favList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) { 
    this.products = this.httpClient.get<InterfaceProduct[]>('./assets/products.json')
    .pipe(
      map(mapProducts => {
        let mapProducts2= mapProducts; 
        let startFavList = mapProducts2
          .filter(filterProduct => filterProduct.flag === true)
          .map(mapProduct => {
            return {id: mapProduct.id, name: mapProduct.name};
          });
        
          this.favList.next(startFavList);
          return mapProducts;
      })
    );
    }

  getProducts(): Observable<InterfaceProduct[]> {
    return this.products;
  }

  getProduct(id: number): Observable<InterfaceProduct> {
    return this.products.pipe(
      map(products => products.find((findProduct) => findProduct.id === id))
    );
   }
}
