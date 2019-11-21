import { Component, OnInit } from '@angular/core';
import { Users } from './users.model';
import { ColegasService } from './colegas.service';

@Component({
  selector: 'app-colegas',
  templateUrl: './colegas.component.html',
  styleUrls: ['./colegas.component.css']
})
export class ColegasComponent implements OnInit {

  users: Users[];
  requests: Request[];

  constructor(private colegasService: ColegasService) { }

  ngOnInit() {
    this.colegasService.getUsers()
        .subscribe((data: Users[]) => this.users = data,
        error => console.error(error),
        () => console.log('Coleguis cargados'));
    this.colegasService.getRequests()
        .subscribe((data: Request[]) => this.requests = data,
          error => console.error(error),
          () => console.log('Peticiones cargadas'));
  }

}
