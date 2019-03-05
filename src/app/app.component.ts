import {AfterViewChecked, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {

  @ViewChild('full')
  full: ElementRef;

  @ViewChild('content')
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

    this.renderer.setStyle(contentNative, 'padding-bottom', diff - 55 + 'px');
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.resize();
  }
}
