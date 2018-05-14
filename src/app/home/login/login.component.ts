import { AuthService } from './../../provider/auth/auth.service';
import { FormBuilder, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms/src/model'
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../provider/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
ide: any
  myForm: FormGroup;
  creden:{
    correo: String;
    contrasenia: String;
  }
  login: boolean;
  imageUrl = "/assets/img/login.png";
  iHeight = "50%";

  logo = "/assets/img/logo.png";

  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService,
    public router: Router,
    public usuario: UserService
  ) {
    this.creden = {
      correo: '',
      contrasenia: ''
    }
    this.login = false;
  }

  ngOnInit() {
  }
  loginUser(){
    
    this.auth.loguear(this.creden).subscribe(
      (res=>{
        localStorage.setItem('id_user',res['data'].id);           //guarda en caché el id del usuario y del token
        localStorage.setItem('auth_token', res['data'].token);
        this.usuario.setAuth();
        this.usuario.setUser(res['data'].id);
        //redireccionar
        this.router.navigate(['dashboard']);
        this.login = false;
      }),(error)=>{
        console.log(error);
        this.login = true;
      }
    )
  }

}
