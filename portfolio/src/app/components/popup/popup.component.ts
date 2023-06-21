import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  data: any;

  constructor(public dialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    const project = localStorage.getItem('project');
    this.data = [JSON.parse(project || '{}')];
    console.log(this.data);
  }

  closePopup(): void {
    this.dialogRef.close();
  }

}