export interface Book {
  id?:number;
  title?:string;
  price?:number;
  yearPublished?:Date;
  publisher?:string;
  imagUrl?:string;
  authorName?:string;
  category?:{
    id?:number;
    name?:string;
  }
}
