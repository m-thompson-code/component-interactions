import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOnChangesComponent } from './ng-on-changes.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgOnChangesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NgOnChangesComponent }]),
  ]
})
export class NgOnChangesModule { }
