import {ViewChild, ElementRef, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ImageModel } from 'src/app/models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input('image') image: ImageModel;
  @Input('displayed') displayed: boolean;
  @Input('displayedNum') displayedNum: number;
  @Input('prev') prev: boolean;
  @Input('next') next: boolean;
  @Input('index') index: number;


  @ViewChild('img') img: ElementRef;
  @Output() emitDisplay = new EventEmitter()

 

  setAsPrime() {
    this.emitDisplay.emit(this.image.id)
  }
}
