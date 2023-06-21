import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: AboutComponent },
      { path: '', component: SkillsComponent },
      // Adicione outros componentes como filhos, se necessário
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }