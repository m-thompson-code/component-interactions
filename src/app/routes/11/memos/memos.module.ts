import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemosComponent } from './memos.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MemosComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MemosComponent }]),
  ]
})
export class MemosModule { }
