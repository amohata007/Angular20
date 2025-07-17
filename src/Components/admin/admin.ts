import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  myCourse: string = 'Angular';
  propertyBinding: boolean = false;
  inputType: string = 'radio';

  clicked() {
    this.myCourse = 'Angular from Event Binding';
  }

  dropChanged(event: Event) {
    const selectedCity = (event.target as HTMLSelectElement).value;
    alert('City Changed to ' + selectedCity + '!');
  }
}
