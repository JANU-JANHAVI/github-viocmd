import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
