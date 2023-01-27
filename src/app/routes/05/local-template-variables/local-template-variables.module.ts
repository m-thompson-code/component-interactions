import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalTemplateVariablesComponent } from './local-template-variables.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocalTemplateVariablesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LocalTemplateVariablesComponent }]),
  ]
})
export class LocalTemplateVariablesModule { }
