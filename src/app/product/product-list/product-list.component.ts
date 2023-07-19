import { Component } from '@angular/core';
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
constructor(public bookService:BookService) {
}
}
