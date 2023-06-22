import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('About criado', () => {
    expect(component).toBeTruthy();
  });
  it('Tem um h2 escrito Sobre', () => {
    const titleElement = fixture.nativeElement.querySelector('.about');
    expect(titleElement.textContent).toContain('Sobre');
  });
  it('Deve renderizar h3 Eu sou Kaio Oliveira', () => {
    const titleElement = fixture.nativeElement.querySelector('h3');
    expect(titleElement.textContent).toContain('Sou Kaio Oliveira');
  });
  it('Deve renderizar span escrita Sou Desenvolvedor Fullstack', () => {
    const titleElement = fixture.nativeElement.querySelector('.about');
    expect(titleElement.textContent).toContain('Full Stack Developer');
  });
  it('Tem uma tag p com uma parte do texto escrita "transição de carreira" e"Aracaju-SE". ', () => {
    const titleElement = fixture.nativeElement.querySelector('.about');
    expect(titleElement.textContent).toContain('transição de carreira');
    expect(titleElement.textContent).toContain('Aracaju-SE');
  });
  it('Apresenta email kaio.ruan@souunit.com.br na classe box', () => {
    const titleElement = fixture.nativeElement.querySelector('.box');
    expect(titleElement.textContent).toContain('kaio.ruan@souunit.com.br');
  });
});

