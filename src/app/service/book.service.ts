import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, shareReplay} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject:BehaviorSubject<Book[]>=new BehaviorSubject<Book[]>([]);
  books$:Observable<Book[]>=this.bookSubject.asObservable();

  constructor(private http:HttpClient) {
    this.getAllBooks()
      .subscribe(data=>this.bookSubject.next(data));
  }
  findBooksById(id:number):Observable<Book>{
    return this.books$
      .pipe(
      map(books=>books.find(b=>b.id===id))
    )as Observable<Book>;
  }
  getAllBooks():Observable<Book[]>{
    return this.http
      .get<Book[]>("http://localhost:8080/book/list-books")
      .pipe(
        shareReplay()
      );
  }
}
