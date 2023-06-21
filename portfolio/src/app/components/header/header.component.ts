import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isWindowSmall = false;
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 840) {
      this.isMenuOpen = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isWindowSmall = !this.isWindowSmall;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
