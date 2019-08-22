import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bcolor;
  constructor() { }
  @HostListener('keyup') changeColor() {
    this.bcolor = this.getRandomColor();
    this.color = this.getRandomColor();
  }
  getRandomColor() {
    // tslint:disable-next-line:no-unused-expression no-bitwise
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  }
}
