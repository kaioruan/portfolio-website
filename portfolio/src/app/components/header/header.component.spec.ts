import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Header criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com o menu fechado', () => {
    expect(component.isMenuOpen).toBe(false);
  });
  it('Ao iniciar com o menu fechado, tem que apresentar o Header contendo Início, Sobre, Skills, Formação, Projetos e Contato', () => {
    const menuElement = fixture.nativeElement.querySelector('.menu');
    expect(component.isMenuOpen).toBe(false);
    expect(menuElement.textContent).toContain('Início');
    expect(menuElement.textContent).toContain('Sobre');
    expect(menuElement.textContent).toContain('Skills');
    expect(menuElement.textContent).toContain('Formação');
    expect(menuElement.textContent).toContain('Projetos');
    expect(menuElement.textContent).toContain('Contato');
  });
  it('deve abrir o menu quando o botão burger for clicado', () => {
    const burgerElement = fixture.nativeElement.querySelector('.burger');
    burgerElement.click();
    expect(component.isMenuOpen).toBe(true);
  });

  it('deve fechar o menu quando o botão burger for clicado', () => { 
    const burgerElement = fixture.nativeElement.querySelector('.burger');
    burgerElement.click();
    burgerElement.click();
    expect(component.isMenuOpen).toBe(false);
  });
  it('Ao clicar no menu, aparece o texto renderizado em tag a Início', () => {

    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Início');
  });
  it('Ao clicar no menu, aparece o texto renderizado em tag a Sobre', () => {
    
    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Sobre');
  });
  it('Ao clicar no menu, aparece o texto renderizado em tag a Skills', () => {
    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Skills');
  });
  it('Ao clicar no menu, aparece o texto renderizado em tag a Formação', () => {
    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Formação');
  });

  it('Ao clicar no menu, aparece o texto renderizado em tag a Projetos', () => {
    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Projetos');
  });
  it('Ao clicar no menu, aparece o texto renderizado em tag a Contato', () => {
    const menuElement = fixture.nativeElement.querySelector('.menu');
    menuElement.click();
    expect(menuElement.textContent).toContain('Contato');
  });
});