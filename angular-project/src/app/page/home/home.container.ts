import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }




  ngOnInit(): void {
    console.log('Sergio');
  }
  ngAfterViewInit() {

  }

}
