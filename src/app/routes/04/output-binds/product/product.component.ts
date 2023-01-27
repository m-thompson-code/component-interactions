import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Output() firstChanged = new EventEmitter<number>();
  @Output() secondChanged = new EventEmitter<number>();
  @Input() first!: number;
  @Input() second!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['first']) {
      this.firstChanged.emit(this.first);
    }
    
    if (changes['second']) {
      this.secondChanged.emit(this.second);
    }
  }
}
