import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimePlace]'
})
export class PrimePlaceDirective {
  @HostBinding('class.prime') prime = false

  constructor(public el: ElementRef) { }
  
}
