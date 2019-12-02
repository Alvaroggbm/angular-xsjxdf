import { Component, OnInit } from '@angular/core';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  adresses;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.adresses = this.cartService.getAdresses();
  }

}