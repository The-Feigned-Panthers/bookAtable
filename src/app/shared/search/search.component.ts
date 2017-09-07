import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/services/search.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  places;
  startAt = new Subject();
  endAt = new Subject();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getbRestaurantsByName(this.startAt, this.endAt)
      .subscribe(places => this.places = places);
  }

  search($event) {
    let q = $event.target.value;
    if (!($event.keyCode >= 65 && $event.keyCode <= 90 || $event.keyCode >= 48 && $event.keyCode <= 57)) {
      return;
    }

    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
  }
}
