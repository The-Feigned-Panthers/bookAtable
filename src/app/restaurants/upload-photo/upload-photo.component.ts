import { Upload } from './../../models/upload';
import { RestaurantsService } from './../../core/services/restaurants.service';
import { Restaurant } from './../../models/restaurant';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})

export class UploadPhotoComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  @Input()
  restaurant: Restaurant;
  constructor(private upSvc: RestaurantsService) { }

  ngOnInit(): void {
  }

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.uploadPhoto(this.restaurant.name, this.currentUpload);
  }
}
