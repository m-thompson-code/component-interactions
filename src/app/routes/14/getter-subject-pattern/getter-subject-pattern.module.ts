import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetterSubjectPatternComponent } from './getter-subject-pattern.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetterSubjectPatternComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GetterSubjectPatternComponent }]),
  ]
})
export class GetterSubjectPatternModule { }
