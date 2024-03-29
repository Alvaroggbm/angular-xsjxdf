import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
 items = [];
 adresses = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

   getAdresses() {
    return this.adresses;
  }

  addToAdressList(adress) {
    this.adresses.push(adress[adress]);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http: HttpClient) { }

}