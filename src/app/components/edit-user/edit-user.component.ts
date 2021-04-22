import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.userService.getUser(id)
      .subscribe(
        data => {
          this.user = data[0];
        },
        error => {
          console.log(error);
        }
      )
  }

  updateUser(): void {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      age: this.user.age
    };

    this.userService.updateUser(this.user.id, data)
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