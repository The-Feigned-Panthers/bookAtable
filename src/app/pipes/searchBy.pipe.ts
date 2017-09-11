import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {
  transform(restaurants: any, args?: any): any {
    if (restaurants && args[0] !== '') {
      const searchedValue = args[0].toLowerCase();
      const props = args[1];
      let result = [];
      props.forEach(prop => {
        result.push(...restaurants.filter(restaurant => restaurant[prop].toLowerCase().includes(searchedValue)));
      });
      return result;
    }
  }
}
