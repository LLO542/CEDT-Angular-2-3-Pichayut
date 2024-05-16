import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { debounceTime } from 'rxjs';

@Directive({
  selector: '[appCustomAttributeDirective]',
  standalone: true
})
export class CustomAttributeDirectiveDirective {
  orginalFontSize: string = this.el.nativeElement.style.fontSize.toString().replace('px', '');
  INTorinalFontSize: number = parseInt(this.orginalFontSize);
  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.fontSize = "200px";
    this.el.nativeElement.style.transition = "font-size 3s";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontSize = "30px";
  }

}
