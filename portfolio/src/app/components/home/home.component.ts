import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    let typed = new Typed('.developer', {
      strings: ['Desenvolvedor Fullstack'],
      typeSpeed:100,
      backSpeed:90,
      loop:true,
      smartBackspace: true
    });
  }

}
