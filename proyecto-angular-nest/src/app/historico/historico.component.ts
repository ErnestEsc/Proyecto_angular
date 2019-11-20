import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { HistoricoService } from './historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: Post[];
  mensaje: string;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    this.historicoService.getPostList()
        .subscribe((datos: Post[]) => this.historico = datos,
        error => console.error(error),
        () => console.log('Posts cargados') 
      );
  }

  addPost(){
    let post = new Post;
    post.id = Math.floor(Math.random() * 10000) +1;
    post.author = "Tú";
    post.content = this.mensaje;
    this.historicoService.addPost(post).subscribe(
      () => this.historico.push(post)
    );
  }

}
