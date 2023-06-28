import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { projects } from '../projects/projects';
// import { LocalStorageService } from '@ngx-pwa/local-storage';

interface Project {
  id: any;
  name: string;
  description: string;
  image: string;
  video: string;
  url: string;
  backend: string;
  frontend: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data: Project[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = projects;
  }

  openPopup(id: any): void {
    const project = this.data.find((project) => project.id === id);
    localStorage.setItem('project', JSON.stringify(project));
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
    });
  }

}
