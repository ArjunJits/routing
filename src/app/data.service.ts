import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products_info = [
    {
      product_id:1,
      product_image:"1.jpg",
      product_name:"Nokia",
      product_price: 10000,
      product_desc: "Good"
    },
    {
      product_id:2,
      product_image:"2.jpg",
      product_name:"Sony",
      product_price: 20000,
      product_desc: "Best"
    },
    {
      product_id:3,
      product_image:"3.jpg",
      product_name:"Honor",
      product_price: 30000,
      product_desc: "Super"
    },
    {
      product_id:4,
      product_image:"4.jpg",
      product_name:"Samsung",
      product_price: 40000,
      product_desc: "Great"
    },
    {
      product_id:5,
      product_image:"5.jpg",
      product_name:"Sony",
      product_price: 45000,
      product_desc: "Great"
    },
    {
      product_id:6,
      product_image:"6.jpg",
      product_name:"Sony",
      product_price: 50000,
      product_desc: "Great"
    },
    {
      product_id:7,
      product_image:"7.jpg",
      product_name:"Iphone ",
      product_price: 60000,
      product_desc: "Awsome"
    }
  ]

  constructor() { }

}
