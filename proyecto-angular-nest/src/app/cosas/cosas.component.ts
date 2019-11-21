import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../perfil/user.model';
import { PerfilService } from '../perfil/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.css']
})
export class CosasComponent implements OnInit {

  @Input() perfil: User;
  @Output() update: EventEmitter<User> = new EventEmitter<User>();

  constructor(private perfilService: PerfilService, private router: Router) { }

  ngOnInit() {
    this.perfilService.getPerfil()
        .subscribe((datos: User) => this.perfil = datos,
                      error => console.error(error),
                      () => console.log('Perfil cargado') 
                  );
  }

  actualizarPerfil(datos: User) {
    this.perfilService.updatePerfil(datos).subscribe( 
      // () => this.update.emit(datos)
    );
  }

}
