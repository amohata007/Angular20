import { Component, computed, effect, signal } from '@angular/core';
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
  length = signal(20);
  breadth = signal(40);

  //Computed Signal
  area = computed(() => this.length() * this.breadth());
  addValue = 0;

  constructor() {
    setTimeout(() => {
      this.courseName.set('Angular in version 20');
    }, 2000);

    effect(() => {
      console.log('Value Triggered..!!', this.counter());
    });

    effect(() => {
      console.log('Value Triggered in ARea..!!', this.area());
    });
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
    this.breadth.set(50); //When click reset computed signal also triggered..!!
  }
}
