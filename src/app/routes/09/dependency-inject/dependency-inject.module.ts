import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectComponent } from './dependency-inject.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DependencyInjectComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DependencyInjectComponent }]),
  ]
})
export class DependencyInjectModule { }
