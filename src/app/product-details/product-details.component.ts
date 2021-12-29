import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 selected_product:any;
 nextitem:any;
  constructor(public ar:ActivatedRoute,public dataservice:DataService,public rt:Router) { 
   this.ar.params.subscribe(dt => 
    this.selected_product= dataservice.products_info.filter((data:any) => data.product_id == dt.pid))
  }
  funNext()
  {
  
  if (this.selected_product[0].product_id + 1 == this.dataservice.products_info.length + 1 )
  {    
    this.nextitem=this.selected_product[0].product_id - this.dataservice.products_info.length + 1;    
    this.rt.navigateByUrl("dp/pd/"+this.nextitem);
  }else{
    this.nextitem =this.selected_product[0].product_id + 1
    this.rt.navigateByUrl("dp/pd/"+this.nextitem);
  }
  }

  funPrev(){
    
    if (this.selected_product[0].product_id == '1')
  {    
    this.nextitem=this.selected_product[0].product_id + this.dataservice.products_info.length - 1 ;    
    this.rt.navigateByUrl("dp/pd/"+this.nextitem);
  }else{
    this.nextitem =this.selected_product[0].product_id - 1;
    this.rt.navigateByUrl("dp/pd/"+this.nextitem);
  }
  }
  ngOnInit(): void {
  }

}
