import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from './services/data.service';

export interface ParentData {
  first$: Observable<number>;
  second$: Observable<number>;
}

@Component({
  providers: [
    DataService
  ],
  selector: 'app-dependency-inject',
  templateUrl: './dependency-inject.component.html',
  styleUrls: ['./dependency-inject.component.scss']
})
export class DependencyInjectComponent {
  readonly first$ = new BehaviorSubject<number>(0); 
  readonly second$ = new BehaviorSubject<number>(0);

  constructor(private readonly dataService: DataService<ParentData>) {
    this.dataService.set({
      first$: this.first$,
      second$: this.second$,
    });
  }

  handleFirstChange(event: Event): void {
    this.first$.next(+(event.target as HTMLInputElement).value);
  }

  handleSecondChange(event: Event): void {
    this.second$.next(+(event.target as HTMLInputElement).value);
  }
}
