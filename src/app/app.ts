import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from '../Components/child/child';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular20');
  protected parentMessage = 'Hello from App Component!';
}
