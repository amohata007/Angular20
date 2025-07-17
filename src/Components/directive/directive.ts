import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {
  color: string = '';
  isDivGreen: boolean = false;

  click(clickColor: string) {
    this.color = clickColor;
  }

  toggle() {
    this.isDivGreen = !this.isDivGreen;
  }
}
