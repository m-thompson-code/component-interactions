import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGettersComponent } from './input-getters.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputGettersComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: InputGettersComponent }]),
  ]
})
export class InputGettersModule { }
