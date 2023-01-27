import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputBindsComponent } from './output-binds.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OutputBindsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: OutputBindsComponent }]),
  ]
})
export class OutputBindsModule { }
