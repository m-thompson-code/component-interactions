import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToObservablePipeComponent } from './to-observable-pipe.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ToObservablePipe } from './pipes/to-observable.pipe';



@NgModule({
  declarations: [
    ToObservablePipeComponent,
    ProductComponent,
    ToObservablePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ToObservablePipeComponent }]),
  ]
})
export class ToObservablePipeModule { }
