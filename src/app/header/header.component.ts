import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
