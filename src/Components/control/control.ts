import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  imports: [FormsModule],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  isVisisble: boolean = true;
  shortMonth: string = 'jan';
  users: string[] = ['Virat', 'Dhoni', 'Rohit', 'Bumrah'];

  showData() {
    this.isVisisble = true;
  }

  hideData() {
    this.isVisisble = false;
  }
}
