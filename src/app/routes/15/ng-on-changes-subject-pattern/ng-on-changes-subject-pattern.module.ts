import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOnChangesSubjectPatternComponent } from './ng-on-changes-subject-pattern.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgOnChangesSubjectPatternComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NgOnChangesSubjectPatternComponent }]),
  ]
})
export class NgOnChangesSubjectPatternModule { }
