import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: User;

  constructor(private perfilService: PerfilService) {  }

  ngOnInit() {
    this.perfilService.getPerfil()
        .subscribe((datos: User) => this.perfil = datos,
                      error => console.error(error),
                      () => console.log('Perfil cargado') 
                  );
  }

  updatePerfil(update) {
    this.perfil = update;
  }

}
