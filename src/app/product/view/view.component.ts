import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  pid: any
  pdata: any = {}
  constructor(private ar: ActivatedRoute, private ps: ProductService,private route:Router) { }
  ngOnInit(): void {
    //to get product id
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      //console.log(this.pid); 

      //array of product
      this.ps.getProduct(this.pid).subscribe((result: any) => {
        this.pdata = result
        //console.log(this.prodarray);

      })

    })
  }
  deleteProduct(){
    this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
      alert('product deleted')
      this.route.navigateByUrl('')
    })
  }

}
