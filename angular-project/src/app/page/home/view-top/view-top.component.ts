import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'view-home-top',
  templateUrl: './view-top.component.html',
  styleUrls: ['./view-top.component.scss']
})
export class ViewTopComponent implements OnInit {

  constructor() { }

  @ViewChild('astronaut') astronaut: ElementRef;
  @ViewChild('logo') logo: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setPallaxInElemnt('astronaut');
    this.setPallaxInElemnt('logo', { insert: false });
  }

  setPallaxInElemnt(input: string, options = { insert: true }): void {
    if (this[input] && this[input].nativeElement) {
      const inputElement = new Parallax(this[input].nativeElement,  {
        hoverOnly: false,
        invertY: options.insert,
        invertX: options.insert,
        clipRelativeInput: true
      });
      inputElement.friction(0.02, 0.02);
    }
  }


}
