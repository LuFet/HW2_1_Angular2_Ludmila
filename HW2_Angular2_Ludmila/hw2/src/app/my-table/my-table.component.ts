import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { PRODUCTS } from '../productsList';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  products: Product[] = this.getProducts();

  getProducts(): Product[] {
    return PRODUCTS;
  }
  getStyles() {
    let styles = {
        "background-color": "yellow",
        "font-weight": "bold",
        "font-size": "25px",
        'color': 'blue'
    };
    return styles;
}
  delete(i:number) {
    console.log("id: " + this.products[i].id);
    this.products.splice(i, 1);
  }
  
  constructor() { 
    this.getProducts();
  }
  isBgDanger(i: number) {
    if (this.products[i].price > 500) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {this.getProducts();
  }
}
