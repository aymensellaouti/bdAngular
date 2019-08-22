import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bgColor = 'red';
  constructor() { }
  @HostListener('mouseenter') entrer() {
    this.bgColor = this.in;
  }
  @HostListener('mouseleave') sortir() {
    this.bgColor = this.out;
  }
}
