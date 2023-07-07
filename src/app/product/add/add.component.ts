import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private fb: FormBuilder,private ps:ProductService , private router:Router) { }

  addForm = this.fb.group({
    id: [''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    image: [''],
    rating: [''],
    review: [''],
    vendorname: ['']
  })
  add() {
    var path = this.addForm.value
    var prodData = {
      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      image: path.image,
      rating: path.rating,
      review: path.rating,
      vendorname:path.vendorname
    }
    this.ps.addProduct(prodData).subscribe((result:any)=>{
      alert('product has added')
      this.router.navigateByUrl('')
    })
  }
}
