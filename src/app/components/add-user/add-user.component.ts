import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    name: '',
    surname: '',
    age: ''
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      age: this.user.age
    };

    this.userService.saveUser(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      )
  }
}
