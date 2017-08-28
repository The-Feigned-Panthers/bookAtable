import { Restaurant } from './../models/restaurant';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'sortByRating'
})
export class SortByRatingPipe implements PipeTransform {

    transform(restaurants: any, args?: any): any {
        if (restaurants) {
            console.log('here');
            const newVal = restaurants.sort((a: Restaurant, b: Restaurant) => {
                const rating1 = a.rating.average;
                const rating2 = b.rating.average;

                if (rating1 < rating2) {
                    return 1;
                } else if (rating1 > rating2) {
                    return -1;
                } else {
                    return 0;
                }
            });

            return newVal;
        } else {
            return restaurants;
        }
    }
}
