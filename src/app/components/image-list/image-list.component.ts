import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/models/image.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] = [];
  displayed: number = 3;
  slide: boolean = true;
  
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.images = this.imagesService.getImages()
  }

  setNewDisplayed(id: number) {
    this.displayed = id
  }
}
