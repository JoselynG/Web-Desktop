import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imageUrl = "/assets/img/login.png";
  iHeight = "50%";

  logo = "/assets/img/logo.png";

  constructor() { }

  ngOnInit() {
  }

}
