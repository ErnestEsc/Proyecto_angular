import { Component, OnInit } from '@angular/core';
import { user } from './user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: user;

  constructor() {  }

  ngOnInit() {
  }

}
