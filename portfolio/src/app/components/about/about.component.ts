import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let typed = new Typed('.tag', {
      strings: ['Full Stack Developer'],
      typeSpeed:100,
      backSpeed:60,
      loop:true,
      backDelay: 2000,
      startDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      shuffle: false,
      fadeOut: true,
      fadeOutDelay: 2000,
      backwards: true,
    });

  }

}
