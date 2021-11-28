import { Component, OnInit } from '@angular/core';
import { Libro } from './LIbro';
import { LibroService } from './libro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    //this.list();
  }

  title = 'practica-web-client';
  libros: Libro[] = [];
  libro: Libro = {
    titulo: '',
    categoria: '',
    isbn: '',
    numPaginas: '',
    autor: '',
    editorial: '',
  };

  clear(){
    this.libro.titulo = '';
    this.libro.categoria = '';
    this.libro.isbn = '';
    this.libro.numPaginas = '';
    this.libro.autor = '';
    this.libro.editorial = '';
    this.libro._id = undefined
  }

  list() {
    this.libroService.list().subscribe((data) => (this.libros = data));
  }

  create() {
    this.libroService.create(this.libro).subscribe(() => {
      this.list();
      this.clear()
    });
  }

  remove(libroId: string) {
    this.libroService.remove(libroId).subscribe(() => this.list());
  }

  setSelectedToUpdateLibro(libro: Libro) {
    this.libro = libro;
  }

  update() {
    this.libroService.update(this.libro).subscribe(() => {
      this.list();
      this.clear()
    });
  }

  onSubmit() {
    if(this.libro._id){
      this.update()
    }else{
      this.create()
    }
  }
}
