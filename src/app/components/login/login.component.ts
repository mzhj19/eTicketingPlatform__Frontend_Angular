import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService) {
  }
  ngOnInit() {
  }

  login(loginForm: NgForm)  {
    this.userService.login(loginForm.value).subscribe(
      (res) =>  {
        console.log(res)
      },
      (err) =>  {
        console.log(err);
      }
    )
  }
}
