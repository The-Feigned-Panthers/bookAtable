import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(restaurants: any, args?: any): any {
    if (restaurants && args != '') {
      let searchedValue = args.toLowerCase();
      return restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchedValue));
    }
  }

}