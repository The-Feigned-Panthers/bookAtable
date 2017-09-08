import { Restaurant } from './../models/restaurant';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(restaurants: any, args?: any): any {
        if (restaurants) {
            if (args === 'addedAt') {
                const newVal = restaurants.sort((a: Restaurant, b: Restaurant) => {
                    const date1 = a.addedAt;
                    const date2 = b.addedAt;

                    if (date1 < date2) {
                        return 1;
                    } else if (date1 > date2) {
                        return -1;
                    } else {
                        return 0;
                    }
                });

                return newVal;
            } else if (args === 'rating') {
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
                const newVal = restaurants.sort((a: Restaurant, b: Restaurant) => {
                    const name1 = a.name;
                    const name2 = b.name;

                    if (name1 < name2) {
                        return -1;
                    } else if (name1 > name2) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                return newVal;
            }
        } else {
            return restaurants;
        }
    }
}
