import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageComponent } from './components/image-list/image/image.component';
import { ImagesService } from './services/images.service';
import { PrimePlaceDirective } from './prime-place.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageComponent,
    PrimePlaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
