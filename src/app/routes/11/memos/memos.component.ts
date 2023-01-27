import { Component } from '@angular/core';
import { memo } from './util/memo';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.scss']
})
export class MemosComponent {
  first = 0;
  second = 0;
}
