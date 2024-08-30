import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    // Obtiene los primeros 3 caracteres del texto a filtrar
    const searchTerm = searchText.slice(0, 3).toLowerCase();

    // Filtra los elementos basándose en los primeros 3 caracteres
    return items.filter(item => {
      return Object.keys(item).some(key => 
        item[key] && item[key].toString().toLowerCase().startsWith(searchTerm)
      );
    });
  }
}
