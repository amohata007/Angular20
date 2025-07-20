import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service } from '../../Services/service';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);
  _service = inject(Service);
  userLists: any[] = [];

  // Can call service like this as well but inject is the new way
  // constructor(private _serviceUser: Service){

  // }

  obj: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._service.getUsers().subscribe((res: any) => {
      this.userLists = res;
    });
  }

  saveInfo() {
    this.http
      .post('https://www.freeprojectapi.com/api/GoalTracker/register', this.obj)
      .subscribe((res: any) => {
        console.log(res, 'data');
      });
  }
}
