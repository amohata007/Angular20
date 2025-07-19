import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);
  userLists: any[] = [];

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
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
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
