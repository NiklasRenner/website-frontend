import {AfterViewChecked, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('full', {static: true})
  full: ElementRef;

  @ViewChild('content',  {static: true})
  content: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resize();
  }

  resize() {
    const fullNative = this.full.nativeElement;
    const fullHeight = fullNative.offsetHeight;
    const contentNative = this.content.nativeElement;
    const currentContentPadding = Number(contentNative.style.paddingBottom.replace('px', ''));
    const fullHeightWithoutPadding = fullHeight - currentContentPadding;
    const diff = window.innerHeight - fullHeightWithoutPadding;
    const navPadding = 55;

    if (diff > navPadding) {
      this.renderer.setStyle(contentNative, 'padding-bottom', diff - navPadding + 'px');
    } else {
      this.renderer.setStyle(contentNative, 'padding-bottom', 0 + 'px');
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.resize();
  }
}
