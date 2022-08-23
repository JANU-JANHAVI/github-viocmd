import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../product/product';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
product: Product | any = '';
id: number | String = '';
showMessage :boolean=false;
constructor(
  private activatedRoute: ActivatedRoute,
  private apiService: ApiService
) {}



ngOnInit(): void {
  this.activatedRoute.params.subscribe((data) => {
    this.getProduct((data as any).id);
  });
 // this.initialize();
}

//initialize(){
//  this.initializeForm();
//}



getProduct(id: number) {
  this.apiService
    .httpGet(`${appConstant.apiRoute.products}/${id}`)
    .subscribe((data) => {
      this.product = data;
      console.log(data);
    });
}
productUpdate(event: boolean){
  if (!(event as any).target){
    this.showMessage= event;
  }

  setTimeout(()=>{
  this.showMessage=false;
},5000)
}
}




