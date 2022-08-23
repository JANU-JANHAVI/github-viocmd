import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatError } from '@angular/material/form-field';
//import { MatFormFieldModule   }  from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReactiveFormsModule,HttpClientModule, MatGridListModule, 
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,  ]
  ],
  exports:[
    
    ReactiveFormsModule,HttpClientModule, MatGridListModule,  MatError,
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, ],CommonModule
  ],
})
export class SharedModule { }
