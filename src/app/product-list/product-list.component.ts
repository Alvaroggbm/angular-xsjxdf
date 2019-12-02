import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  mynotify(){
    window.alert("este es mi notify de la lista de productos, se ejecuta como un metodo propio")

  }

  onNotify(){
    window.alert("Este es un metodo mio, pero lo ejecuta otro componente que se encarga de comprobar el precio del producto que le estoy pasando como parametro");
  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/