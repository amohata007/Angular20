import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  imports: [FormsModule, UpperCasePipe, DatePipe],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control implements OnInit, OnDestroy {
  isVisisble: boolean = true;
  shortMonth: string = 'jan';
  users: string[] = ['Virat', 'Dhoni', 'Rohit', 'Bumrah'];
  date: number = Date.now();

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
  }

  showData() {
    this.isVisisble = true;
  }

  hideData() {
    this.isVisisble = false;
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
}
