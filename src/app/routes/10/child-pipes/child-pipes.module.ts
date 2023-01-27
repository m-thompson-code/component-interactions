import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildPipesComponent } from './child-pipes.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { PurePipe } from './pipes/pure.pipe';



@NgModule({
  declarations: [
    ChildPipesComponent,
    ProductComponent,
    PurePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ChildPipesComponent }]),
  ]
})
export class ChildPipesModule { }
