import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import * as octicons from 'octicons';

@Directive({
  selector: '[appOcticon]'
})
export class OcticonDirective implements OnInit {
  @Input() appOcticon: string;
  @Input() color: string;
  @Input() size: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'align-middle');

    element.innerHTML = octicons[this.appOcticon].toSVG();
    const icon: Node = element.firstChild;

    if (this.color) {
      this.renderer.setStyle(icon, 'color', this.color);
    }

    if (this.size) {
      this.renderer.setStyle(icon, 'width', this.size);
      this.renderer.setStyle(icon, 'height', '100%');
    }
  }
}
