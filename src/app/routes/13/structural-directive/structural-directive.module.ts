import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { RerenderDirective } from './directives/rerender.directive';
import { SerializePipe } from './pipe/serialize.pipe';



@NgModule({
  declarations: [StructuralDirectiveComponent, ProductComponent, RerenderDirective, SerializePipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: StructuralDirectiveComponent }]),
  ]
})
export class StructuralDirectiveModule { }
