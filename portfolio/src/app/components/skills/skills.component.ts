import { Component, OnInit } from '@angular/core';
import {skills} from '../skills/skills';

interface Skill {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  data: Skill[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.data = skills;
  }
 }

