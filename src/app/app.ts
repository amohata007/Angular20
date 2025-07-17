import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../Components/user/user';
import { Admin } from '../Components/admin/admin';
import { SignalEx } from '../Components/signal-ex/signal-ex';
import { Control } from '../Components/control/control';

@Component({
  selector: 'app-root',
  imports: [User, Admin, SignalEx, Control],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular20');
}
