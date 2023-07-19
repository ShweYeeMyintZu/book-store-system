import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Book} from "../../model/book";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{
  book$!:Observable<Book>;


constructor(private bookService:BookService,
            private route:ActivatedRoute,
            private router:Router,

            private cartService:CartService) {
}
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')as string;
    this.book$=this.bookService.findBooksById(parseInt(id));
  }

  public addToCart(){
  this.book$.subscribe(data=>this.cartService.addToCart(data));
  }
  public goHome(){
  this.router.navigate(['/books']);
  }
  public goCartView(){
this.router.navigate(['/cart-view'])
  }
}
