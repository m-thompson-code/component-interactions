import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponentStoreComponent } from './ngrx-component-store.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgrxComponentStoreComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NgrxComponentStoreComponent }]),
  ]
})
export class NgrxComponentStoreModule { }
