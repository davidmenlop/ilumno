import { Component, OnInit } from '@angular/core';
import { DrupalService } from './drupal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  error: string | null = null;
  page = 1;
  pageSize = 10;
  searchText = ''

  constructor(private drupalService: DrupalService) { }

  ngOnInit() {
    this.drupalService.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data); // Para verificar la respuesta en la consola
      },
      error => {
        this.error = 'Error al obtener datos';
        console.error(error); // Para verificar errores en la consola
      }
    );
  }

  onPageChange(page: number) {
    this.page = page;
  }

  changePageSize(size: number) {
    this.pageSize = size;  // Cambia el tamaño de página según la selección
    this.page = 1; // Reinicia la página a 1 al cambiar el tamaño
  }
}


