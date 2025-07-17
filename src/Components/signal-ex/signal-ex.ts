import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-ex',
  imports: [FormsModule],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  courseName = signal<string>('Angular');
  counter = signal<number>(0);
  addValue = 0;

  constructor() {
    setTimeout(() => {
      this.courseName.set('Angular in version 20');
    }, 2000);
  }

  incCount() {
    this.counter.update((val) => val + 1);
  }

  decCount() {
    this.counter.update((val) => val - 1);
  }

  addCount() {
    this.counter.update((val) => val + this.addValue);
    this.addValue = 0;
  }

  resetCount() {
    this.counter.set(0);
  }
}
