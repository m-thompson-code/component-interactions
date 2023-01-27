import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBindsComponent } from './input-binds.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputBindsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: InputBindsComponent }]),
  ]
})
export class InputBindsModule { }
