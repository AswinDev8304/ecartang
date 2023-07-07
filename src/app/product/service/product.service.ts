import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //create an object for behavioural subject:
  search=new BehaviorSubject(" ")

  constructor(private http: HttpClient) { }
  //api to get all products:
  getAllProduct() {
    return this.http.get('http://localhost:3000/products')
  }
  //api to get single product
  getProduct(pid: any) {
    return this.http.get('http://localhost:3000/products/' + pid)
  }
  //api to add new product
  addProduct(productObject: any) {
    return this.http.post('http://localhost:3000/products', productObject)
  }
  //edit a product
  updateProduct(pid: any, productObject: any) {
    return this.http.put('http://localhost:3000/products/' + pid, productObject)
  }
  //delete 
  deleteProduct(pid:any){
    return this.http.delete('http://localhost:3000/products/'+pid)
  }
}
