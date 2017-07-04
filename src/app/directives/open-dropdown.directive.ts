import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpenDropdown]'
})
export class OpenDropdownDirective {

  private isOpened = false;

  @HostBinding('class.open') get isOpen(){
    return this.isOpened;
  }

  @HostListener('click') open(){
    this.isOpened = true;
  }

  @HostListener('mouseleave') close(){
    this.isOpened = false;
  }

}
