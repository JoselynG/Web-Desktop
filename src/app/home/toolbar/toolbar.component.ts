import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:class-name
interface user {
  fullName: string;
  email: string;
  imageUrl: string;
  id: string;
}


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  userInfo: user = {
    fullName: 'Maynard J. Keenan',
    email: 'maynard@tool.com',
    imageUrl: '/assets/img/perfil.jpg',
    id: '1',
  };
  constructor() { }

  ngOnInit() {
  }

}
